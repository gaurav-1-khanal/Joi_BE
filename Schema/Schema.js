import Joi from "joi";

export const signUpSchema = Joi.object({
  name: Joi.string().trim().min(2).required().messages({
    "string.min": "Name must be at least 2 characters long",
    "any.required": "Name is required",
  }),
  email: Joi.string().trim().lowercase().email().required().messages({
    "string.email": "Enter a valid email address",
    "any.required": "Email is required",
  }),
  password: Joi.string().trim().min(8).required().messages({
    "string.min": "Password must be at least 8 characters long",
    "any.required": "Password is required",
  }),
});
