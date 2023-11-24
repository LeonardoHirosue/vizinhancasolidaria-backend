import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateResidences1700671393194 implements MigrationInterface {

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
                            name: "user_id",
                            type: "uuid",
                            isNullable: true
                        },
                        {
                            name: "street_id",
                            type: "uuid",
                            isNullable: true
                        },
                        {
                            name: "number",
                            type: "numeric"
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
                            name: "FKStreet",
                            referencedTableName: "streets",
                            referencedColumnNames: ["id"],
                            columnNames: ["street_id"],
                            onDelete: "SET NULL",
                        },
                        {
                            name: "FKUser",
                            referencedTableName: "users",
                            referencedColumnNames: ["id"],
                            columnNames: ["user_id"],
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
