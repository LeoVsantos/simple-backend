import { Router } from 'express';

import { celebrate, Segments, Joi } from 'celebrate';

import UserController from '../controllers/UsersController';

const usersRouter = Router();
const userController = new UserController();

usersRouter.post(
  '/create',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  userController.create,
);



export default usersRouter;
