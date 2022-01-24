import 'reflect-metadata';
import { validateEnvironment } from './validate-environment';
import * as dotenv from 'dotenv';
dotenv.config();
validateEnvironment();
import { createConnection } from 'typeorm';
import fastify from 'fastify';
import app from './app';

const server = fastify({
  logger: true,
});

const start = async () => {
  let databaseConnection;
  try {
    databaseConnection = await createConnection({
      type: 'mysql',
      host: process.env.DB_HOST,
	  port: 3306,
	  username: process.env.DB_USERNAME,
	  password: process.env.DB_PASSWORD,
	  database: process.env.DB_DATABASE,
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
