import Joi from 'joi';

const createFoodSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(50)
    .required()
    .messages({
      'string.min': 'Name must be at least 2 characters long',
      'string.max': 'Name cannot exceed 50 characters',
      'any.required': 'Name is required'
    }),
  category: Joi.string()
    .valid('main', 'appetizer', 'dessert', 'drink')
    .required()
    .messages({
      'any.only': 'Category must be one of: main, appetizer, dessert, drink',
      'any.required': 'Category is required'
    }),
  description: Joi.string()
    .min(10)
    .max(200)
    .required()
    .messages({
      'string.min': 'Description must be at least 10 characters long',
      'string.max': 'Description cannot exceed 200 characters',
      'any.required': 'Description is required'
    }),
  ingredients: Joi.array()
    .items(Joi.string().min(1))
    .min(1)
    .max(15)
    .required()
    .messages({
      'array.min': 'At least 1 ingredient is required',
      'array.max': 'Cannot have more than 15 ingredients',
      'any.required': 'Ingredients are required'
    }),
  isSpicy: Joi.boolean()
    .required()
    .messages({
      'any.required': 'Spicy status is required'
    }),
  price: Joi.number()
    .positive()
    .max(999.99)
    .required()
    .messages({
      'number.positive': 'Price must be a positive number',
      'number.max': 'Price cannot exceed $999.99',
      'any.required': 'Price is required'
    }),
  imageUrl: Joi.string()
    .uri()
    .required()
    .messages({
      'string.uri': 'Image URL must be a valid URL',
      'any.required': 'Image URL is required'
    })
});

const updateFoodSchema = Joi.object({
  name: Joi.string().min(2).max(50),
  category: Joi.string().valid('main', 'appetizer', 'dessert', 'drink'),
  description: Joi.string().min(10).max(200),
  ingredients: Joi.array().items(Joi.string().min(1)).min(1).max(15),
  isSpicy: Joi.boolean(),
  price: Joi.number().positive().max(999.99),
  imageUrl: Joi.string().uri()
}).min(1);

export const validateCreateFood = (data) => {
  return createFoodSchema.validate(data, { abortEarly: false });
};

export const validateUpdateFood = (data) => {
  return updateFoodSchema.validate(data, { abortEarly: false });
};