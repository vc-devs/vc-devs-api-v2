import { Column, BeforeUpdate, BeforeInsert, AfterUpdate } from "typeorm";

export abstract class BaseEntity {

    @Column({ name: "updated_at", nullable: true })
    public updatedAt: number;

    @Column({ name: "created_at", nullable: true })
    public createdAt: number;


    @BeforeUpdate()
    public setUpdatedAt() {
        this.updatedAt = Math.floor(Date.now() / 1000);
    }


    @BeforeInsert()
    public updateDates() {
        this.createdAt = Math.floor(Date.now() / 1000);
    }

}