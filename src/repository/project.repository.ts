import {EntityManager, EntityRepository, Repository} from "typeorm";
import {Project} from "../entity/Project";
import {BaseRepository} from "./base.repository";

@EntityRepository(Project)
export class ProjectRepository extends Repository<Project>{

 /*   constructor(private manager: EntityManager) {
        super();
    }*/

    createOrSave(data) {
        const project = new Project();
        project.name = data.name;
        project.description = data.description;
        project.isActive = data.isActive;
        return this.manager.save(project);
    }

    getAll = () => {
        return this.manager.find(Project);
    }

    getByID = (id:any) => {
        return this.manager.findOne(Project, id);
    }

    updateByID = (entity, data) => {
        entity.name = data.name;
        entity.description = data.description;
        entity.isActive = data.isActive;
        return this.manager.save(entity);
    }

    deleteByID = (id:any) => {
        return this.manager.delete(Project, id);
    }



}