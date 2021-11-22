import { getRepository, Repository, Not } from 'typeorm';

import IPackageRepository from '@modules/products/repositories/IPackageRepository';
import IPackageDTO from '@modules/products/dtos/IPackageDTO';

import Package from '../entities/Package';

class PackageRepository implements IPackageRepository {
  private ormRepository: Repository<Package>;

  constructor() {
    this.ormRepository = getRepository(Package);
  }

  public async findPackageByName(name: string): Promise<Package | undefined> {
    const packageType = await this.ormRepository.findOne({
      where: { name },
    });
    return packageType;
  }

  public async findAllPackages(): Promise<Package[]> {
    const packages = await this.ormRepository.find({
      where: { enable: true }
    });
    return packages;
  }

  public async create(data: IPackageDTO): Promise<Package> {
    const packageType = this.ormRepository.create(data);

    await this.ormRepository.save(packageType);

    return packageType;
  }
}

export default PackageRepository;
