import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateNotifications1666147587927 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TYPE status AS ENUM (
                'opened', 
                'working',  
                'closed'
            );
        `);

        await queryRunner.createTable(
            new Table(
                {
                    name: "notifications",
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
                            name: "type_id",
                            type: "uuid",
                        },
                        {
                            name: "status",
                            type: "status",
                        },
                        {
                            name: "description",
                            type: "varchar"
                        },
                        {
                            name: "license_plate",
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
                            name: "FKUser",
                            referencedTableName: "users",
                            referencedColumnNames: ["id"],
                            columnNames: ["user_id"],
                            onDelete: "CASCADE"                        
                        },
                        {
                            name: "FKNotificationType",
                            referencedTableName: "notification_types",
                            referencedColumnNames: ["id"],
                            columnNames: ["type_id"],
                            onDelete: "CASCADE",
                        }
                    ]
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("notifications");
        await queryRunner.query(`DROP TYPE status`);
    }
}
