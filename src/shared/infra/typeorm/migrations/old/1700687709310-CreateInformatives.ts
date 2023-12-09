import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateInformatives1700687709310 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "informatives",
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
                            name: "title",
                            type: "varchar",
                        },
                        {
                            name: "description",
                            type: "varchar",
                        },
                        {
                            name: "url_banner",
                            type: "varchar",
                        },
                        {
                            name: "url_source",
                            type: "varchar",
                        },
                        {
                            name: "start_date",
                            type: "timestamp",
                        },
                        {
                            name: "end_date",
                            type: "timestamp",
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
        await queryRunner.dropTable("informatives");
    }

}
