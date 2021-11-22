import { Request, Response } from 'express';
import { container } from 'tsyringe';

import listPackageService from '@modules/products/services/listPackagesService';

export default class PackagesController {
  public async find(_: Request, response: Response): Promise<Response> {
    const listPackages = container.resolve(listPackageService);

    const packages = await listPackages.execute();

    return response.json({ packages });
  }
}
