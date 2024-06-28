import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'

export default class CreateValidator {
  public schema = schema.create({
    email: schema.string( [
      rules.trim(),
      rules.email(),
    ]),
    username: schema.string({ trim: true }),
    name: schema.string({ trim: true }),
    password: schema.string({}, [rules.minLength(8)]),
    role: schema.string({ trim: true }),
  })

  public messages: CustomMessages = {}
}
