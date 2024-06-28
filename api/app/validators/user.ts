import vine from '@vinejs/vine'

/**
 * Validate user creation action
 */
export const createUserValidator = vine.compile(
  vine.object({
    pseudo: vine.string().trim().minLength(3).maxLength(255),
    fullName: vine.string().trim().maxLength(255).optional(),
    email: vine.string().trim().email(),
    password: vine.string().trim().minLength(8).maxLength(255).confirmed()
  })
)
