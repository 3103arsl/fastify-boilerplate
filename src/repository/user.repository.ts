import {EntityManager, EntityRepository, Repository} from "typeorm";
import {Project} from "../entity/project";
import {User} from "../entity/user";
import {HashService} from "../service/hash.service";

@EntityRepository(User)
export class UserRepository extends Repository<User>{

    createOrSave(data) {
        const entity = new User();
        entity.firstName = data.first_name;
        entity.lastName = data.last_name;
        entity.email = data.email;
        entity.password = data.password;
        return this.manager.save(entity);
    }

    getAll = () => {
        return this.manager.find(User);
    }

    getByID = (id:any) => {
        return this.manager.findOne(User, id);
    }

    updateByID = (entity, data) => {
        entity.name = data.name;
        entity.description = data.description;
        entity.isActive = data.isActive;
        return this.manager.save(entity);
    }

    deleteByID = (id:any) => {
        return this.manager.delete(User, id);
    }


    getByEmail = (email:string) => {
        return this.manager.findOne(User, {email: email});
    }

    issueToken = (entity, token) => {
        entity.token = token;
        return this.manager.save(entity);
    }



}