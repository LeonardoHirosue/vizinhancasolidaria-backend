import { MigrationInterface, QueryRunner } from "typeorm";

export class default1701692703982 implements MigrationInterface {
    name = 'default1701692703982'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "alerts" ADD "image" character varying`);
        await queryRunner.query(`ALTER TABLE "alerts" ALTER COLUMN "license_plate" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "alerts" ALTER COLUMN "license_plate" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "alerts" DROP COLUMN "image"`);
    }

}
