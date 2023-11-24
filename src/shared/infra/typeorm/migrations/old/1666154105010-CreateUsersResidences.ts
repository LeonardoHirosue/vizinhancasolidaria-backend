import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersResidences1666154105010 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "users_residences",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isNullable: true,
                        },
                        {
                            name: "residence_id",
                            type: "uuid"                            
                        },
                        {
                            name: "user_id",
                            type: "uuid"                            
                        }                        
                    ],
                    foreignKeys: [
                        {
                            name: "FKResidence",
                            referencedTableName: "residences",
                            referencedColumnNames: ["id"],
                            columnNames: ["residence_id"],
                            onDelete: "CASCADE"
                        },
                        {
                            name: "FKUsers",
                            referencedTableName: "users",
                            referencedColumnNames: ["id"],
                            columnNames: ["user_id"],
                            onDelete: "CASCADE",
                        }
                    ]
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users_residences");
    }
}
