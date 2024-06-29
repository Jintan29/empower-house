import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Prisma, PrismaClient } from "@prisma/client";
import CreateValidator from "App/Validators/User/CreateValidator";
import User from "App/Models/User";


export default class AuthController {
  private userModel: User;
  constructor() {
    this.userModel = new User();
  }

  async register({ auth, request, response }: HttpContextContract) {
    try {
      // แยกข้อมูลจาก req ที่ส่งมา

      const validateData = await request.validate(CreateValidator);

      // create user
      const createdData = await this.userModel.create(
        validateData as Prisma.UserCreateInput
      );
      const {email,password} = validateData

      // create token and auth
      const token = await auth.use("api").attempt(email, password);

      return response.ok({
        createdData,
        token,
      });
    } catch (error) {
        console.error(error);
        return response.internalServerError({ error: 'An error occurred during registration' });
      }

  }

  public async login({ auth, request,response }: HttpContextContract) {
    let { username, password } = request.body();

    username = username.toLowerCase()
    const prisma = new PrismaClient()
    const authMeta = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email: username,
          },
          {
            username,
          },
        ],
      },
    })
    const authData = await auth.use('api').attempt(username, password, {
      expiresIn: '12 hours',
    })
    return authData
  }
}
