import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {User} from "./user";
import {Base} from "./base";

@Entity("projects")
export class Project extends Base{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(() => User, user => user.projects, {onDelete: "CASCADE"})
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column({
        name: "name",
        nullable: true,
    })
    name: string;

    @Column({
        name: "description",
        type: "text",
        nullable: true,
    })
    description: string;

    @Column({
        name: "is_active",
        default: false,
        nullable: true,
    })
    isActive: boolean;
}
