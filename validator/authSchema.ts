import vine from '@vinejs/vine'

export const registerSchema = vine.object({
  name: vine.string().trim().minLength(2).maxLength(30),
  username: vine.string().trim().regex(new RegExp('^[A-Za-z_][A-Za-z0-9._]{4,29}$')),
  email: vine.string().trim().email(),
  password: vine.string().minLength(8).maxLength(32).confirmed()
});

export const loginSchema = vine.object({
  email: vine.string().trim().email(),
  password: vine.string().minLength(8).maxLength(32)
});
