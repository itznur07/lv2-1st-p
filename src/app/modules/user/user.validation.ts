import z from 'zod';

const userSchemaValidation = z.object({
  password: z
    .string({ invalid_type_error: 'password must be string' })
    .max(20, { message: 'password cannot be more then 20 chararters' })
    .optional(),
});

export const UserSchemaValidation = {
  userSchemaValidation,
};
