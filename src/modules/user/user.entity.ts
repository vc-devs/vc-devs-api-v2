import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../helpers/BaseEntity";

@Entity("users")
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 45 })
    name: string;

    @Column("varchar", { length: 45, unique: true })
    email: string;

    @Column("varchar", { length: 100 })
    password: string;

    // @OneToOne(type => UserInformation, userInfo => userInfo.user, {
    //     cascade: true
    // })
    // information: UserInformation;

    // @OneToOne(type => Address, address => address.user)
    // address: Address;

    // @OneToMany(type => Payment, payment => payment.user)
    // payments: Payment[];

    // @OneToMany(type => Diploma, diploma => diploma.user)
    // diplomas: Diploma[];

    // @ManyToMany(type => Course)
    // @JoinTable({
    //     name: "student_courses", // table name for the junction table of this relation
    //     joinColumn: {
    //         name: 'user_id',
    //         referencedColumnName: "id"
    //     },
    //     inverseJoinColumn: {
    //         name: 'course_id',
    //         referencedColumnName: "id"
    //     }
    // })
    // courses: Course[];

    // @ManyToMany(type => Classroom)
    // @JoinTable({
    //     name: "classroom_students", // table name for the junction table of this relation
    //     joinColumn: {
    //         name: 'user_id',
    //         referencedColumnName: "id"
    //     },
    //     inverseJoinColumn: {
    //         name: 'classroom_id',
    //         referencedColumnName: "id"
    //     }
    // })
    // classrooms: Classroom[];

    // @ManyToMany(type => Task)
    // @JoinTable({
    //     name: "task_results", // table name for the junction table of this relation
    //     joinColumn: {
    //         name: 'user_id',
    //         referencedColumnName: "id"
    //     },
    //     inverseJoinColumn: {
    //         name: 'task_id',
    //         referencedColumnName: "id"
    //     }
    // })
    // tasks: Task[];

    // @OneToMany(type => Classroom, classroom => classroom.teacher)
    // manager_classrooms: Classroom[];

    // @CreateDateColumn()
    // created_at: Date;

    // @UpdateDateColumn()
    // updated_at: Date;

}
