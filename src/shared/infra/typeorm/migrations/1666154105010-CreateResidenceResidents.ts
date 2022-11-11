import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateResidenceResidents1666154105010 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "residence_residents",
                    columns: [
                        {
                            name: "residence_id",
                            type: "uuid"                            
                        },
                        {
                            name: "resident_id",
                            type: "uuid"                            
                        }                        
                    ],
                    foreignKeys: [
                        {
                            name: "FKResidence",
                            referencedTableName: "residences",
                            referencedColumnNames: ["id"],
                            columnNames: ["residence_id"],
                            onDelete: "SET NULL"
                        },
                        {
                            name: "FKResident",
                            referencedTableName: "users",
                            referencedColumnNames: ["id"],
                            columnNames: ["resident_id"],
                            onDelete: "SET NULL",
                        }
                    ]
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("residence_residents");
    }
}
