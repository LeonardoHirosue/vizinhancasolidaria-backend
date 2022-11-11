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
                            name: "group_id",
                            type: "uuid"
                        },
                        {
                            name: "street_id",
                            type: "uuid"
                        },
                        {
                            name: "name",
                            type: "varchar",
                            isUnique: true
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
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"
                        }
                    ],
                    foreignKeys: [
                        {
                            name: "FKGroup",
                            referencedTableName: "groups",
                            referencedColumnNames: ["id"],
                            columnNames: ["group_id"],
                            onDelete: "SET NULL",
                        },
                        {
                            name: "FKStreet",
                            referencedTableName: "streets",
                            referencedColumnNames: ["id"],
                            columnNames: ["street_id"],
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
