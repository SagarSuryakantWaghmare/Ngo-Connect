import Joi from 'joi';

// i export in the form of the function you can do according to you
export const signupValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(3).max(100).required()
    });
    
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: 'bad request', error });
    }
    next();
};


export const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(3).max(100).required()
    });
    
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: 'bad request', error });
    }
    next();
};
