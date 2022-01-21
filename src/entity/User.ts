import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Base} from "./base";
import {Project} from "./project";

@Entity('users')
export class User extends Base{

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Project, project => project.user)
    projects: Project[];

    @Column({
        name: "first_name",
        nullable: true,
    })
    firstName: string;

    @Column({
        name: "last_name",
        nullable: true,
    })
    lastName: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    async setPassword(password: string) {
        //this.password = await hashPassword(password);
    }

}
