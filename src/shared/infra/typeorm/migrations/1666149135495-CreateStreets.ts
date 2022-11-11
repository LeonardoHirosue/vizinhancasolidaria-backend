import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStreets1666149135495 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "streets",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "name",
                            type: "varchar"
                        },
                        {
                            name: "country",
                            type: "varchar"
                        },
                        {
                            name: "state",
                            type: "varchar"
                        },
                        {
                            name: "city",
                            type: "varchar"
                        },
                        {
                            name: "district",
                            type: "varchar"
                        },
                        {
                            name: "postal_code",
                            type: "varchar"
                        }
                    ]
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("streets");
    }
}
