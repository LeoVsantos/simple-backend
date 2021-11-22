import {MigrationInterface, QueryRunner, getRepository} from "typeorm";

import { UserSeed } from '../seeds/Users.seed';
import { PackagesSeed } from '../seeds/Packages.seed';
import { ProductsSeed } from '../seeds/Products.seed';

export class SeedUserAndProducts1637597101898 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

      await queryRunner.commitTransaction().then(async () => {

        await queryRunner.startTransaction().then(async () => {

          const user = getRepository("users")
          await user.insert(UserSeed);

          const packages = getRepository("packages")
          await packages.insert(PackagesSeed);

          const products = getRepository("products");
          await products.insert(ProductsSeed);

        })
      });
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
