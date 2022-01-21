import {Initializer, Service} from "fastify-decorators";
import {getCustomRepository} from "typeorm";


@Service()
export class RepositoryService {

    async getCustomRepository(repository): Promise<any> {
        return await getCustomRepository(repository);
    }
}