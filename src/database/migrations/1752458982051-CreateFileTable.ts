import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateFileTable1752458982051 implements MigrationInterface {
  private table = new Table({
    name: 'files',
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
        length: '255',
      },
      {
        name: 'url',
        type: 'varchar',
      },
      {
        name: 'extension',
        type: 'varchar',
        length: '60',
      },
      {
        name: 'mimetype',
        type: 'varchar',
        length: '60',
      },
      {
        name: 'size',
        type: 'decimal',
        length: '22',
      },
      {
        name: 'path_bucket',
        type: 'varchar',
        length: '255',
        isNullable: true,
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

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
