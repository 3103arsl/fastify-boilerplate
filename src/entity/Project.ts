import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne, JoinColumn} from "typeorm";
import {User} from "./User";
import {Base} from "./Base";

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
