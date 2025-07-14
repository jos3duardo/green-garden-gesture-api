import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreatePlantTable1752458995964 implements MigrationInterface {
  private table = new Table({
    name: 'plants',
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'varchar',
      },
      {
        name: 'type',
        type: 'varchar',
      },
      {
        name: 'plantedDate',
        type: 'date',
      },
      {
        name: 'location',
        type: 'varchar',
      },
      {
        name: 'soilType',
        type: 'varchar',
      },
      {
        name: 'sunExposure',
        type: 'varchar',
      },
      {
        name: 'wateringFrequency',
        type: 'varchar',
      },
      {
        name: 'status',
        type: 'varchar',
      },
      {
        name: 'file_id',
        type: 'int',
      },
      {
        name: 'temperature',
        type: 'varchar',
      },
      {
        name: 'humidity',
        type: 'varchar',
      },
      {
        name: 'sunlight',
        type: 'varchar',
      },
      {
        name: 'description',
        type: 'text',
      },
      {
        name: 'nextWatering',
        type: 'varchar',
      },
      {
        name: 'created_at',
        type: 'timestamp with time zone',
        default: 'now()',
      },
      {
        name: 'updated_at',
        type: 'timestamp with time zone',
        isNullable: true,
      },
      {
        name: 'deleted_at',
        type: 'timestamp with time zone',
        isNullable: true,
      },
    ],
  });

  private foreignKey = new TableForeignKey({
    columnNames: ['file_id'],
    referencedTableName: 'files',
    referencedColumnNames: ['id'],
    onDelete: 'CASCADE',
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
    await queryRunner.createForeignKeys(this.table.name, [this.foreignKey]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
