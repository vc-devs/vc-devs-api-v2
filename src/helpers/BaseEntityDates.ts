import { Column, BeforeUpdate, BeforeInsert } from "typeorm";

export class BaseEntityDates {

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
        const time = Math.floor(Date.now() / 1000);
        this.createdAt = time;
        this.updatedAt = time;

    }

}