# Fastify | NodeJS | TypeScript | MySQL | TypeORM Boilerplate

> A ready to deployable API server. The goal of this boilerplate is to help the others who are new in NodeJs tech stack.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them. 

```
NodeJS Version v16.13.0
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

Create Database in MySQL with name "fastify" and create .env file and copy the following code and paste in .env file 

```
DB_TYPE=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=fastify
DB_USERNAME=root
DB_PASSWORD=
DB_SYNCHRONIZE=true
DB_LOGGING:false
APP_PORT=5022
APP_ENV=development
TYPEORM_CONNECTION=mysql
```

Run the following command
```
npm install
```

## Output
```
http://localhost:5022/api/projects
```
