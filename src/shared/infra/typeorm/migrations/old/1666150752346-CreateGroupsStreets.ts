import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateGroupsStreets1666150752346 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "groups_streets",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },
                        {
                            name: "group_id",
                            type: "uuid",
                        },
                        {
                            name: "street_id",
                            type: "uuid"
                        },
                        {
                            name: "start_number",
                            type: "numeric"
                        },
                        {
                            name: "end_number",
                            type: "numeric"
                        }
                    ],
                    foreignKeys: [
                        {
                            name: "FKGroup",
                            referencedTableName: "groups",
                            referencedColumnNames: ["id"],
                            columnNames: ["group_id"],
                            onDelete: "CASCADE"
                        },
                        {
                            name: "FKStreet",
                            referencedTableName: "streets",
                            referencedColumnNames: ["id"],
                            columnNames: ["street_id"],
                            onDelete: "CASCADE"
                        }
                    ]
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("groups_streets");
    }
}
