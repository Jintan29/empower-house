import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { prisma } from "@ioc:Adonis/Addons/Prisma";
import CreateValidator from "App/Validators/User/CreateValidator";

// ทดสอบการทำงานร่วมกันระหว่าง C -> M
import User from "App/Models/User";
import { Prisma } from "@prisma/client";

export default class UsersController {
  private userModel: User;
  constructor() {
    this.userModel = new User();
  }

  public async get({ request }: HttpContextContract) {
    // PREPARE OPTIONS
    const { options, search } = request.qs()

    // PREPARE SEARCH
    if (search) {
      options.where = {
        fullName: {
          contains: search,
          mode: 'insensitive',
        },
      }
    }

    // FETCH
    const data = await this.userModel.getAll(options)
    return data
  }

  public async getById({ request, params }: HttpContextContract) {
    // PREPARE OPTIONS
    const { options } = request.qs()

    // PREPARE DATA
    const { id } = params

    // FETCH
    const data = await this.userModel.getById(parseInt(id), options)
    return data
  }

  public async create({ request, response }: HttpContextContract) {

    // ตรวจสอบความถูกต้องของข้อมูล
    const validateData = await request.validate(CreateValidator);

    // Create
    const createdData = await this.userModel.create(
      validateData as Prisma.UserCreateInput
    );

    return response.status(201).send(createdData);
  }
  
  public async delete({ params}: HttpContextContract) {

    const { id } = params
    return await this.userModel.delete(parseInt(id))
  }


   //เอาไว้เทสเฉยๆ
   public index() {
    return "JJ Controller";
  }

  // ทดสอบการรับ params
  public test({ params }: HttpContextContract) {
    return params;
  }

  // ทดสอบการรับ return ตัว body ด้วย Req
  public async test2({ request }: HttpContextContract) {
    // กำหนดค่าตรงๆ
    // const user = {
    //     name:'jj1234',
    //     email:'jintankung@hotmail.com',
    //     role:'SuperAdmin'
    // }

    // กำหหนดค่าผ่าน req

    const userData = request.body();

    // ทดสอบสร้างข้อมูล โดยเรียกใช้ prisma ตรงๆ , assign ค่าตรงๆ ผ่าน prisma.ชื่อตาราง ได้เลย
    const createdUser = await prisma.user.create({
      data: userData,
    });

    return createdUser;

    // return request.body()    ต้องการ retuen query string(?)
  }
}
