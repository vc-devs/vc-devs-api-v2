import { Column } from "typeorm";

export class BaseEntityCreateBy {
    @Column({ name: "created_by", nullable: true })
    public createdBy: number;

}