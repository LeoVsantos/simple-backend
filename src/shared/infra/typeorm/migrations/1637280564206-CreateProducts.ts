import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1637280564206 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'package_type',
            type: 'uuid',
          },
          {
            name: 'package_quantity',
            type: 'int'
          },
          {
            name: 'weight',
            type: 'int'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['package_type'],
            referencedColumnNames: ['id'],
            referencedTableName: 'packages',
            name: 'PackagesTypes',
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
        ]
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }

}
