import { inject, injectable } from 'tsyringe';

import Package from '../infra/typeorm/entities/Package';
import IPackageRepository from '../repositories/IPackageRepository';

@injectable()
class ListPackagesService {

  constructor(
    @inject('PackageRepository')
    private packageRepository: IPackageRepository,
  ){}

  async execute(): Promise<Package[]> {
    const packages = this.packageRepository.findAllPackages();
    return packages;
  }
}

export default ListPackagesService;
