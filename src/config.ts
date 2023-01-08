import * as dotenv from 'dotenv';

dotenv.config();

const {
    PORT,
    NODE_ENV ,
    POSTGRES_HOST,
    POSTGRES_PORT,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD
} = process.env;

export default {
    port : PORT,
    host : POSTGRES_HOST,
    db_port : POSTGRES_PORT,
    database : POSTGRES_DB,
    db_user : POSTGRES_USER,
    db_password : POSTGRES_PASSWORD
}
