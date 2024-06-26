import { prisma } from '@ioc:Adonis/Addons/Prisma'
import Hash from '@ioc:Adonis/Core/Hash'
import { Prisma } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'
import Model from './Model'

type DataType = Prisma.UserGetPayload<null>
type FindType = Prisma.UserFindManyArgs<DefaultArgs>
type CreateType = Prisma.UserCreateManyInput
type CreatePayloadType = Prisma.UserCreateInput
type UpdateType = Prisma.UserUncheckedUpdateManyInput
type UpdatePayloadType = Prisma.UserUpdateInput

export default class User extends Model<DataType, FindType, CreateType, UpdateType> {
  protected model: Prisma.UserDelegate<DefaultArgs> = prisma.user

  public async getAll(options?: FindType | undefined): Promise<DataType[]> {
    const data = await this.model.findMany(options)
    return data
  }

  public async getById(id: number, options?: FindType | undefined): Promise<DataType | null> {
    const data = await this.model.findFirst({
      where: {
        id,
      },
      ...options,
    })
    return data
  }

  // public async getByRole(options?: FindType | undefined): Promise<DataType[]> {
  //   const data = await this.model.findMany(options)
  //   return data
  // }

  public async create(data: CreatePayloadType): Promise<DataType> {
    data.password = await Hash.make(data.password)
    // data.fullName = `${data.firstName} ${data.lastName}`.trim()
    const createdData = await this.model.create({
      data: data,
    })
    return createdData
  }

  public async update(id: number, data: UpdatePayloadType): Promise<DataType> {
    let updated = await this.model.update({
      where: {
        id,
      },
      data,
    })
    // const fullName = `${updated.firstName} ${updated.lastName}`.trim()
    updated = await this.model.update({
      where: {
        id,
      },
      data: {
        // fullName,
      },
    })

    return updated
  }

  public async upsert(id: number, data: CreatePayloadType): Promise<DataType> {
    const upserted = await this.model.upsert({
      where: {
        id,
      },
      create: {
        ...data,
      },
      update: {
        ...data,
      },
    })

    return upserted
  }

  public async delete(id: number): Promise<DataType> {
    const data = await this.model.delete({
      where: {
        id,
      },
    })

    return data
  }

  public async activate(id: number): Promise<DataType> {
    const updated = await this.model.update({
      where: {
        id,
      },
      data: {
        // isActive: true,
      },
    })

    return updated
  }

  public async deactivate(id: number): Promise<DataType> {
    const updated = await this.model.update({
      where: {
        id,
      },
      data: {
        // isActive: false,
      },
    })

    return updated
  }

  // public async changePassword(id: number, dirtyPassword: string): Promise<DataType> {
  //   // const password = await Hash.make(dirtyPassword)
  //   const updated = await this.model.update({
  //     where: {
  //       id,
  //     },
  //     data: {
  //       // password,
  //     },
  //   })

  //   return updated
  // }
}
