import Package from '../infra/typeorm/entities/Package';
import IPackageDTO from '../dtos/IPackageDTO';

export default interface IPackageRepository {
  findPackageByName(name: string): Promise<Package | undefined>;
  create(data: IPackageDTO): Promise<Package>;
  findAllPackages(): Promise<Package[]>;
}
