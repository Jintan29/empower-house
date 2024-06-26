import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'

export default class CreateValidator {
  public schema = schema.create({
    email: schema.string([
        rules.email(),
        rules.trim(),
      ]),
    username: schema.string(),
    name: schema.string(),
    password: schema.string([rules.minLength(8)]),
    role: schema.string(),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {}
}
