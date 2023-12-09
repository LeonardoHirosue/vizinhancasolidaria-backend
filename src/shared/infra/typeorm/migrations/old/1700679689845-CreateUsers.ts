import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1700679689845 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TYPE role AS ENUM (
                'Não identificado(a)', 
                'Morador(a)', 
                'Anfitriã(o)',
                'Tutor(a)',
                'Administrador(a)'
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
                            name: "residence_id",
                            type: "uuid"
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
                            name: "cellphone",
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
                            name: "role",
                            type: "role",
                        },
                        {
                            name: "desired_role",
                            type: "role",
                        },
                        {
                            name: "avatar",
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
                            name: "FKResidence",
                            referencedTableName: "residences",
                            referencedColumnNames: ["id"],
                            columnNames: ["residence_id"],
                            onDelete: "SET NULL",
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
