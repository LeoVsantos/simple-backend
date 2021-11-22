import { Request, Response } from 'express';
import { container } from 'tsyringe';

import createProductService from '@modules/products/services/createProductService';
import listProductService from '@modules/products/services/listProductService';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const req = request.body;

    const createProduct = container.resolve(createProductService);

    const product = await createProduct.execute(req);

    return response.json({ product });
  }

  public async find(_: Request, response: Response): Promise<Response> {
    const listProduct = container.resolve(listProductService);

    const products = await listProduct.execute();

    return response.json({ products });
  }
}
