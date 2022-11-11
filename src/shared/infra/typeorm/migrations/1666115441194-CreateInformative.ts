import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateInformative1666115441194 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "informative",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "user_id",
                            type: "uuid",
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
                            name: "image",
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
                            name: "url",
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
                            name: "FKUser",
                            referencedTableName: "users",
                            referencedColumnNames: ["id"],
                            columnNames: ["user_id"],
                            onDelete: "SET NULL",
                            onUpdate: "SET NULL",
                        }
                    ]
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("informative");
    }
}
