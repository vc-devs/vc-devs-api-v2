import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { mixin } from 'magical-mixin'
import { BaseEntityDates } from "../../helpers/BaseEntityDates";
import { BaseEntityCreateBy } from "../../helpers/BaseEntityCreateBy";


@Entity('school')
export class School extends mixin(BaseEntityDates, BaseEntityCreateBy) {
  
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length:  100})
    name: string;
 
}