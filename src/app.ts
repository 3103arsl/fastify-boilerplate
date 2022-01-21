import * as path from 'path';
import * as AutoLoad from 'fastify-autoload';
import fastifyCors from 'fastify-cors';
import fastifyAccepts from 'fastify-accepts';
import fastifyFormBody from 'fastify-formbody';
import fastifyMultipart from 'fastify-multipart';
import { bootstrap } from 'fastify-decorators';
import { resolve } from 'path';

export default function(fastify, opts, next) {
  // TODO: (bdietz) - make this more locked down
  // https://github.com/fastify/fastify-cors
  fastify.register(fastifyCors);
  fastify.register(fastifyAccepts);
  fastify.register(fastifyFormBody);
  fastify.register(fastifyMultipart);
  // origin: ['http://localhost:3000'],
  // credentials: true,
  // Place here your custom code!

  // Do not touch the following lines

  // Register handlers auto-bootstrap
  fastify.register(bootstrap, {
    // Specify directory with our controllers
    directory: resolve(__dirname, `controller`),

    // Specify mask to match only our controllers
    mask: /\.controller\./,
  });

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugin'),
    options: Object.assign({}, opts),
    includeTypeScript: true,
  });

  // Make sure to call next when done
  next();
}
