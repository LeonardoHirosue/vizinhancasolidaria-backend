import { MigrationInterface, QueryRunner, Table} from "typeorm";
import { v4 as uuidV4 } from "uuid";

export class CreateNotificationTypes1666146366553 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "notification_types",
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
                            name: "updated_at",
                            type: "timestamp",                            
                            default: "now()"
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

        await queryRunner.query(`
                INSERT INTO notification_types VALUES (
                    '${uuidV4()}', 
                    'Veículo Suspeito'
                );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("notification_types");
    }
}
