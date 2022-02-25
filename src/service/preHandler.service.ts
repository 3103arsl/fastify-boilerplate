import {Service} from "fastify-decorators";
import {getCustomRepository} from "typeorm";


@Service()
export class preHandlerService {

    auth = (request, reply, done) => {
        console.log('auth Yhooooooooooo');
        done();
    }
}