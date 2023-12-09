import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePets1700671670380 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "pets",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "residence_id",
                            type: "uuid"
                        },
                        {
                            name: "name",
                            type: "varchar"
                        },
                        {
                            name: "breed",
                            type: "varchar"
                        },
                        {
                            name: "description",
                            type: "varchar"
                        },
                        {
                            name: "url_image",
                            type: "varchar",
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
                            onDelete: "CASCADE"
                        }
                    ]
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pets");
    }

}
