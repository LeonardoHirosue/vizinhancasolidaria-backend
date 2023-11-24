import {MigrationInterface, QueryRunner, Table} from "typeorm";


export class CreateAlertTypes1700688398540 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TYPE label AS ENUM (
                'error', 
                'success', 
                'warning',
                'info'
            );
        `);

        await queryRunner.createTable(
            new Table(
                {
                    name: "alert_types",
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
                            name: "label",
                            type: "label"
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("alert_types");
        await queryRunner.query(`DROP TYPE label`);
    }

}
