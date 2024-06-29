
import { PrismaAuthProviderContract, PrismaAuthProviderConfig } from '@ioc:Adonis/Addons/Prisma'
import { User } from '@prisma/client'

declare module '@ioc:Adonis/Addons/Auth' {

  interface ProvidersList {
   
    user: {
      implementation: PrismaAuthProviderContract<User>
      config: PrismaAuthProviderConfig<User>
    }
  }
 
  interface GuardsList {
   

    api: {
      implementation: OATGuardContract<'user', 'api'>
      config: OATGuardConfig<'user'>
      client: OATClientContract<'user'>
    }

    basic: {
      implementation: BasicAuthGuardContract<'user', 'basic'>
      config: BasicAuthGuardConfig<'user'>
      client: BasicAuthClientContract<'user'>
    }
  }
}
