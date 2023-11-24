import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateResidences1666151979170 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "residences",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "groups_streets_id",
                            type: "uuid",
                            isNullable: true
                        },
                        {
                            name: "number",
                            type: "numeric"
                        },
                        {
                            name: "phone",
                            type: "varchar",
                            isNullable: true
                        },
                        {
                            name: "updated_at",
                            type: "timestamp",
                            default: "now()"
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"
                        }
                    ],
                    foreignKeys: [
                        {
                            name: "FKGroupStreet",
                            referencedTableName: "groups_streets",
                            referencedColumnNames: ["id"],
                            columnNames: ["groups_streets_id"],
                            onDelete: "SET NULL",
                        }
                    ]
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("residences");
    }
}
