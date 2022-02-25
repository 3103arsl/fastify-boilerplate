import {Controller, GET, POST} from 'fastify-decorators';
import {FastifyReply, FastifyRequest} from "fastify";
import {RepositoryService} from "../service/repository.service";
import {UserRepository} from "../repository/user.repository";
import {HashService} from "../service/hash.service";

@Controller({
    route: '/api/auth',
})
export default class AuthenticationController{

    private repository;

    public constructor(
        private repositoryService: RepositoryService,
        private hashService: HashService
    ) {
        this.repository = this.repositoryService.getCustomRepository(UserRepository);
    }

    @POST('/signup')
    async registerHandler(request: FastifyRequest<any>, reply: FastifyReply<any>) {
        let user = await this.repository.then(repository => repository.createOrSave({
            first_name:request.body.first_name,
            last_name:request.body.last_name,
            email:request.body.email,
            password:  this.hashService.make(request.body.password)
        }));
        reply.code(201).send({success:true, data: user});
    }

    @POST('/login')
    async loginHandler(request: FastifyRequest<any>, reply: FastifyReply<any>) {
        let user = await this.repository.then(repository => repository.getByEmail(request.body.email));
        if (!user || !(await this.hashService.compare(request.body.password, user.password))) {
            reply.code(404).send({message: 'Invalid email or password'});
        }
        const token = await this.repository.then(repository => repository.issueToken(user, this.hashService.make(`${user.email}${new Date()}`)));
        reply.code(200).send({
            data: {
                token: user.token,
            }
        });
        //reply.code(200).send({data: 'Login'});
    }

    @POST('/logout')
    async logoutHandler(request: FastifyRequest<any>, reply: FastifyReply<any>) {
        reply.code(200).send({data: 'Logout'});
    }

}