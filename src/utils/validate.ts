import Joi from 'joi';
///////////////////////////////// Validation by using joi ///////////////////////////////
export const messageSchema = Joi.object({
  name: Joi.string().min(5).max(23).trim().required(),
  email: Joi.string().email().trim().required(),
  query: Joi.string().trim().required(),
});


export const postSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
});

///////////////////////////////// Validation by using joi ///////////////////////////////