import { MigrationInterface, QueryRunner } from "typeorm";

export class default1701058970801 implements MigrationInterface {
    name = 'default1701058970801'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users_tokens" ("id" character varying NOT NULL, "refresh_token" character varying NOT NULL, "expires_date" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" character varying, CONSTRAINT "PK_9f236389174a6ccbd746f53dca8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cars" ("id" character varying NOT NULL, "color" character varying NOT NULL, "license_plate" character varying NOT NULL, "brand" character varying NOT NULL, "model" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "residence_id" character varying, CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pets" ("id" character varying NOT NULL, "name" character varying NOT NULL, "breed" character varying NOT NULL, "description" character varying NOT NULL, "url_image" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "residence_id" character varying, CONSTRAINT "PK_d01e9e7b4ada753c826720bee8b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "streets" ("id" character varying NOT NULL, "name" character varying NOT NULL, "district" character varying NOT NULL, "postal_code" character varying NOT NULL, "state" character varying NOT NULL, "city" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e375a3a3ebbc18cf91e72374d94" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "residences" ("id" character varying NOT NULL, "number" integer NOT NULL, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "street_id" character varying, CONSTRAINT "PK_505bad416f6552d9481a82385bb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "alert_types" ("id" character varying NOT NULL, "name" character varying NOT NULL, "label" character varying NOT NULL, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e6d638fdc7e2a3ae71eaee8149e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."alerts_status_enum" AS ENUM('opened', 'working', 'closed')`);
        await queryRunner.query(`CREATE TABLE "alerts" ("id" character varying NOT NULL, "status" "public"."alerts_status_enum" NOT NULL, "description" character varying NOT NULL, "license_plate" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" character varying, "type_id" character varying, CONSTRAINT "PK_60f895662df096bfcdfab7f4b96" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('Não identificado(a)', 'Morador(a)', 'Anfitriã(o)', 'Tutor(a)', 'Administrador(a)')`);
        await queryRunner.query(`CREATE TYPE "public"."users_desired_role_enum" AS ENUM('Não identificado(a)', 'Morador(a)', 'Anfitriã(o)', 'Tutor(a)', 'Administrador(a)')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "birth_date" TIMESTAMP NOT NULL, "cellphone" character varying NOT NULL, "rg" character varying NOT NULL, "cpf" character varying NOT NULL, "role" "public"."users_role_enum" NOT NULL, "desired_role" "public"."users_desired_role_enum" NOT NULL, "avatar" character varying NOT NULL, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "residence_id" character varying, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "informatives" ("id" character varying NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "url_banner" character varying NOT NULL, "url_source" character varying NOT NULL, "start_date" TIMESTAMP NOT NULL, "end_date" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" character varying, CONSTRAINT "PK_7ca78726eeb39b1ada1fb61234d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users_tokens" ADD CONSTRAINT "FK_32f96022cc5076fe565a5cba20b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_fdb17770f189e2fb10507dfd358" FOREIGN KEY ("residence_id") REFERENCES "residences"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pets" ADD CONSTRAINT "FK_d610624d53232418908f3d08588" FOREIGN KEY ("residence_id") REFERENCES "residences"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "residences" ADD CONSTRAINT "FK_27d46ff68b45eba86360ce7d244" FOREIGN KEY ("street_id") REFERENCES "streets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "alerts" ADD CONSTRAINT "FK_f1eba840c1761991f142affee66" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "alerts" ADD CONSTRAINT "FK_14b18b6e7a4933a6f92732d42a2" FOREIGN KEY ("type_id") REFERENCES "alert_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_23ec8212aaed907cb922d3b4369" FOREIGN KEY ("residence_id") REFERENCES "residences"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "informatives" ADD CONSTRAINT "FK_c9ef54fb08f74d2370beadc2c8a" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "informatives" DROP CONSTRAINT "FK_c9ef54fb08f74d2370beadc2c8a"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_23ec8212aaed907cb922d3b4369"`);
        await queryRunner.query(`ALTER TABLE "alerts" DROP CONSTRAINT "FK_14b18b6e7a4933a6f92732d42a2"`);
        await queryRunner.query(`ALTER TABLE "alerts" DROP CONSTRAINT "FK_f1eba840c1761991f142affee66"`);
        await queryRunner.query(`ALTER TABLE "residences" DROP CONSTRAINT "FK_27d46ff68b45eba86360ce7d244"`);
        await queryRunner.query(`ALTER TABLE "pets" DROP CONSTRAINT "FK_d610624d53232418908f3d08588"`);
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_fdb17770f189e2fb10507dfd358"`);
        await queryRunner.query(`ALTER TABLE "users_tokens" DROP CONSTRAINT "FK_32f96022cc5076fe565a5cba20b"`);
        await queryRunner.query(`DROP TABLE "informatives"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_desired_role_enum"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
        await queryRunner.query(`DROP TABLE "alerts"`);
        await queryRunner.query(`DROP TYPE "public"."alerts_status_enum"`);
        await queryRunner.query(`DROP TABLE "alert_types"`);
        await queryRunner.query(`DROP TABLE "residences"`);
        await queryRunner.query(`DROP TABLE "streets"`);
        await queryRunner.query(`DROP TABLE "pets"`);
        await queryRunner.query(`DROP TABLE "cars"`);
        await queryRunner.query(`DROP TABLE "users_tokens"`);
    }

}
