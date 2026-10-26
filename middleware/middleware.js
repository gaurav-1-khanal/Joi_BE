import { signUpSchema } from "../Schema/Schema.js";

export const validateSignup = (req, res, next) => {
  const { error, value } = signUpSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return res.status(400).json({ success: false, errors: errorMessages });
  }

  req.body = value;
  next();
};
