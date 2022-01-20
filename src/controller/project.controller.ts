import {Controller, DELETE, GET, PATCH, POST, PUT} from 'fastify-decorators';
import {Project} from "../entity/Project";
import {getCustomRepository, getRepository} from "typeorm";
import {ProjectRepository} from "../repository/project.repository";
import {ProjectRequest} from "../request/project.request";
import {FastifyReply, FastifyRequest} from "fastify";

@Controller({
    route: '/api/projects',
})
export default class ProjectController{

    public constructor() {}

    @GET({ url: '/' })
    async indexHandler(request: FastifyRequest<any>, reply: FastifyReply<any>) {
       // const projects = await Project.find();
        const repository = getCustomRepository(ProjectRepository);
        const projects = await repository.getAll();
        reply.code(200).send({data: projects});
    }

    @POST('/', ProjectRequest)
    async storeHandler(request: FastifyRequest<any>, reply: FastifyReply<any>) {
        const repository = getCustomRepository(ProjectRepository);
        let project = await repository.createOrSave({
            name:request.body.name,
            description:request.body.description,
            isActive:request.body.isActive
        });
        reply.code(201).send({success:true,data: project});
    }

    @GET({url: '/:id'})
    async showHandler(request: FastifyRequest<any>, reply: FastifyReply<any>) {
        const repository = getCustomRepository(ProjectRepository);
        const projects = await repository.getByID(request.params.id);
        reply.code(200).send({data: projects});
    }

    @PATCH({ url: '/:id' })
    async updateHandler(request: FastifyRequest<any>, reply: FastifyReply<any>) {
        const repository = getCustomRepository(ProjectRepository);
        const project = await repository.getByID(request.params.id);
        const newProject = await repository.updateByID(project, {
            name:request.body.name,
            description:request.body.description,
            isActive:request.body.isActive
        })
        reply.code(200).send({data: project, new: newProject});
    }

    @DELETE({ url: '/:id' })
    async deleteHandler(request: FastifyRequest<any>, reply: FastifyReply<any>) {
        const repository = getCustomRepository(ProjectRepository);
        const projects = await repository.deleteByID(request.params.id);
        reply.code(200).send({data: projects});
    }
}