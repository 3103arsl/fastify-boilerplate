import 'reflect-metadata';
import { validateEnvironment } from './validate-environment';
import * as dotenv from 'dotenv';
dotenv.config();
validateEnvironment();
import { createConnection, useContainer } from 'typeorm';
import { Container } from 'typedi';
import fastify from 'fastify';
import app from './app';

const server = fastify({
  logger: true,
});

//useContainer(Container);
const start = async () => {
  let databaseConnection;
  try {

    databaseConnection = await createConnection({
      type: 'mysql',
      host: "localhost",
	  port: 3306,
	  username: "root",
	  password: "",
	  database: "fastify",
      synchronize: true,
      logging: false,
      migrationsRun: false,
      entities: ['src/entity/**/*.ts'],
      migrations: ['src/migration/!**!/!*.ts'],
      subscribers: ['src/subscriber/!**/!*.ts'],
    });
    server.register(app);
    await server.listen(process.env.APP_PORT ? Number(process.env.APP_PORT) : 3001, '0.0.0.0');
  } catch (err) {
    if (databaseConnection) {
      databaseConnection.close();
    }
    server.log.error(err);
    process.exit(1);
  }
};

start();
