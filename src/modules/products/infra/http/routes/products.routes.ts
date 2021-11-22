import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ProductController from '../controllers/ProductsController';
import PackagesController from '../controllers/PackagesController';

import ensureAutheticated from '../middlewares/ensureAuthenticated';

const productsRouter = Router();

const productController = new ProductController();
const packagesController = new PackagesController();

productsRouter.post(
  '/create',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.number().required(),
      package_type: Joi.string().required(),
      package_quantity: Joi.number().required(),
      weight:  Joi.number().required()
    },
  }),
  ensureAutheticated,
  productController.create,
);

productsRouter.get('/list', ensureAutheticated, productController.find);


productsRouter.get('/packages', ensureAutheticated, packagesController.find);


export default productsRouter;
