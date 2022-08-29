const Joi = require('joi');

const postSchema = Joi.object({
    description:Joi.string().required()
  });

  const putSchema = Joi.object({
    name:Joi.string().pattern(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } } ),
    phone: Joi.string().pattern(/^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/)
  }).or('name','email','phone');

  module.exports={
    postSchema,
    putSchema
  }