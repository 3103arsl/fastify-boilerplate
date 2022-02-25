import {Service} from "fastify-decorators";
const bcrypt = require('bcrypt');

@Service()
export class HashService {

    readonly SALT_ROUND = 15;

    genSalt = () => {
       return bcrypt.genSaltSync(this.SALT_ROUND);
    }

    make = (plaintextPassword) => {
       return bcrypt.hashSync(plaintextPassword, this.SALT_ROUND);
    }

    compare = (plaintextPassword, hash) => {
        return bcrypt.compareSync(plaintextPassword, hash);
    }
}