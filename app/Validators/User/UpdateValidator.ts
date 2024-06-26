import { CustomMessages, rules, schema } from '@ioc:Adonis/Core/Validator'

export default class UpdateValidator {
  public schema = schema.create({
    firstName: schema.string.optional([rules.trim(), rules.capitalize()]),
    lastName: schema.string.optional([rules.trim(), rules.capitalize()]),
    fullName: schema.string.optional([rules.trim()]),
    email: schema.string.optional([rules.email(), rules.trim()]),
    confirmed: schema.boolean.optional(),
    imageUrl: schema.string.optional([rules.trim()]),
    settings: schema.object.optional().anyMembers(),
    role: schema.object.optional().anyMembers(),
    actionRole: schema.array.optional().members(schema.string()),
    isManager: schema.boolean.optional(),
    position: schema.string.optional([rules.trim()]),
    isActive: schema.boolean.optional(),
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
