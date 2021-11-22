import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Product from '../infra/typeorm/entities/Product';

import IProductsRepository from '../repositories/IProductsRepository';
import IPackageRepository from '../repositories/IPackageRepository';

interface IRequest {
  name: string;
  description: string,
	price: number,
	package_type: string,
	package_quantity: number,
	weight: number
}

@injectable()
class CreateProductService {

  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('PackageRepository')
    private packageRepository: IPackageRepository,
  ){}

  async execute({
    name,
    description,
    package_type,
    package_quantity,
    price,
    weight
  }: IRequest): Promise<Product> {
    let productPackage;

    const checkProductExist = await this.productsRepository.findByName(name);
    productPackage = await this.packageRepository.findPackageByName(package_type);

    if (checkProductExist) {
      throw new AppError('this product has already been registered.');
    }

    if(!productPackage){
      productPackage = await this.packageRepository.create({
        name: package_type,
        enable: true,
      })
    }

    if(productPackage.package_qtd_max && package_quantity > productPackage.package_qtd_max){
      throw new AppError('maximum quantity of the selected package');
    }

    const product = await this.productsRepository.create({
      name,
      description,
      package_type: productPackage.id,
      package_quantity,
      price,
      weight
    });

    return product;
  }
}

export default CreateProductService;
