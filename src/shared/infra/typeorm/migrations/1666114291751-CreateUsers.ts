import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1666114291751 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TYPE role AS ENUM (
                'unidentified', 
                'resident', 
                'host', 
                'tutor'
            );
        `);

        await queryRunner.createTable(
            new Table(
                {
                    name: "users",
                    columns:[
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
                            name: "email",
                            type: "varchar",
                            isUnique: true
                        },
                        {
                            name: "password",
                            type: "varchar"
                        },
                        {
                            name: "birth_date",
                            type: "timestamp"
                        },
                        {
                            name: "cell",
                            type: "varchar"
                        },
                        {
                            name: "rg",
                            type: "varchar",
                            isUnique: true
                        },
                        {
                            name: "cpf",
                            type: "varchar",
                            isUnique: true
                        },
                        {
                            name: "user_role",
                            type: "role",
                        },
                        {
                            name: "isAdmin",
                            type: "boolean",
                            default: false
                        },
                        {
                            name: "avatar",
                            type: "varchar",
                            isNullable: true
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
        await queryRunner.dropTable("users");
        await queryRunner.query(`DROP TYPE role`);
    }
}
