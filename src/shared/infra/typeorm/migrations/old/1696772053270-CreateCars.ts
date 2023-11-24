import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCars1696772053270 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "cars",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true,
                        },
                        {
                            name: "residence_id",
                            type: "uuid"
                        },
                        {
                            name: "color",
                            type: "varchar"
                        },
                        {
                            name: "license_plate",
                            type: "varchar",
                            isUnique: true
                        },
                        {
                            name: "brand",
                            type: "varchar"
                        },
                        {
                            name: "model",
                            type: "varchar"
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"
                        }
                    ],
                    foreignKeys: [
                        {
                            name: "FKResidence",
                            referencedTableName: "residences",
                            referencedColumnNames: ["id"],
                            columnNames: ["residence_id"],
                            onDelete: "CASCADE",
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cars");
    }

}
