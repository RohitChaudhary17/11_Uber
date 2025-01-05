import joi from 'joi';

const SignupValidator = (req, res, next) => {
  const schema = joi.object({
    fullname: joi.object({
      firstname: joi.string().min(3).required().messages({
        'string.min': 'First name must be at least 3 characters long',
        'any.required': 'First name is required',
      }),
      lastname: joi.string().optional(),
    }),
    email: joi.string().email().required(),
    password: joi.string().min(4).max(20).required(),
  });

 
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: 'Bad request',
      error: error.details,
    });
  }

  
  next();
};

export {
  SignupValidator,
};
