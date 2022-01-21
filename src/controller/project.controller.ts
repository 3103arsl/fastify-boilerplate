import {Controller, DELETE, GET, PATCH, POST, PUT} from 'fastify-decorators';
import {ProjectRepository} from "../repository/project.repository";
import {ProjectRequest} from "../request/project.request";
import {FastifyReply, FastifyRequest} from "fastify";
import {RepositoryService} from "../service/repository.service";

@Controller({
    route: '/api/projects',
})
export default class ProjectController{

    private repository;

    public constructor(private repositoryService: RepositoryService) {
         this.repository = this.repositoryService.getCustomRepository(ProjectRepository);
    }

    @GET({ url: '/' })
    async indexHandler(request: FastifyRequest<any>, reply: FastifyReply<any>) {
        const projects = await this.repository.then(repository => repository.getAll());
        reply.code(200).send({data: projects});
    }

    @POST('/', ProjectRequest)
    async storeHandler(request: FastifyRequest<any>, reply: FastifyReply<any>) {
        let project = await this.repository.then(repository => repository.createOrSave({
            name:request.body.name,
            description:request.body.description,
            isActive:request.body.isActive
        }));
        reply.code(201).send({success:true,data: project});
    }

    @GET({url: '/:id'})
    async showHandler(request: FastifyRequest<any>, reply: FastifyReply<any>) {
        const project = await this.repository.then(repository => repository.getByID(request.params.id));
        reply.code(200).send({data: project});
    }

    @PATCH({ url: '/:id' })
    async updateHandler(request: FastifyRequest<any>, reply: FastifyReply<any>) {
        const project = await this.repository.then(repository => repository.getByID(request.params.id));
        await this.repository.then(repository => repository.updateByID(project, {
            name:request.body.name,
            description:request.body.description,
            isActive:request.body.isActive
        }));
        reply.code(200).send({data: project});
    }

    @DELETE({ url: '/:id' })
    async deleteHandler(request: FastifyRequest<any>, reply: FastifyReply<any>) {
        const project = await this.repository.then(repository => repository.deleteByID(request.params.id));
        reply.code(200).send({data: project});
    }
}