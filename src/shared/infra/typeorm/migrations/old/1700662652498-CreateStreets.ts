import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStreets1700662652498 implements MigrationInterface {

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
                            name: "district",
                            type: "varchar"
                        },
                        {
                            name: "postal_code",
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
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"
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
