import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateResidenceHosts1666154745863 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "residence_hosts",
                    columns: [
                        {
                            name: "residence_id",
                            type: "uuid"                            
                        },
                        {
                            name: "host_id",
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
                            name: "FKHost",
                            referencedTableName: "users",
                            referencedColumnNames: ["id"],
                            columnNames: ["host_id"],
                            onDelete: "CASCADE",
                        }
                    ]
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("residence_hosts");
    }
}
