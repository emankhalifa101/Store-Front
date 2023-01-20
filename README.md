# Storefront Backend Project

___Table of Contents___

- [Storefront Backend Project](#storefront-backend-project)
    - [Prerequisites](#prerequisites)
    - [Setup environment](#setup-environment)
  - [Running the application](#running-the-application)
  - [Running the unit tests](#running-the-unit-tests)
  - [Built With](#built-with)
  - [Acknowledgments](#acknowledgments)
  - [Endpoints](#endpoints)
  - [Database Schema](#database-schema)

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 



### Prerequisites

You need the following modules and dependencies installed to run this project:

```bash
v16.19.0       
```


### Setup environment

First, create a `.env` file that contain all the required environment variables:

```bash
# .env varables
PORT =3000
NODE_ENV =dev
POSTGRES_HOST =127.0.0.1
POSTGRES_PORT=5432
POSTGRES_DB=store_dev
POSTGRES_DB_TEST=store_test
POSTGRES_USER=eman
POSTGRES_PASSWORD=1234
SALTROUNDS=10
BCRYBT_TEXT_PASSWORD=s0/\/\P4$$w0rD
JWT_SECRET=token-secret
```


Run your D.B postgress :

```bash


# Login to Postgres
psql -U postgres

# Postgres shell
# This will list out all the databases
\l

# If "store" database is not present
create database store_dev; 
```

Next, you need to run the database migrations:

```bash
npm run migration:up
```

# create db for testing 
```bash
create database store_dev; 
```

then run command 
```bash
npm run dev
```


## Running the application

Use the following command to run the application in watch mode:

```bash
npm run dev
```


The application will run on <http://localhost:3000/>.

## Running the unit tests

Use the following command to run the unit tests:

```bash
npm run test
```
To reset tetsing database run this command

```bash
npm run test:reset
```
if u will run test command several times 
please reset first then run it 
```bash
npm run test:reset
npm run test
```
To Test it You will use the Postman.


## Built With

- [NodeJS](https://nodejs.org/) - The JavaScript runtime
- [db-migrate](https://db-migrate.readthedocs.io/en/latest/) - The database migration tool
- [Express](https://expressjs.com) - The web framework
- [TypeScript](https://www.typescriptlang.org/) - Types JS extension
- [Jasmine](https://jasmine.github.io/) - The unit testing framework


## Endpoints

- See [REQUIREMENTS.md](./REQUIREMENTS.md) file

## Database Schema

 - See [REQUIREMENTS.md](./REQUIREMENTS.md) file