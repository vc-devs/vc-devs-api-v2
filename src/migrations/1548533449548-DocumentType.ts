import {MigrationInterface, QueryRunner} from "typeorm";

export class DocumentType1548533449548 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "documentType" ("updated_at" integer, "created_at" integer, "id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, CONSTRAINT "PK_0751c809871db52c1661eb507c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("updated_at" integer, "created_at" integer, "id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "email" character varying(45) NOT NULL, "password" character varying(100) NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "documentType"`);
    }

}
