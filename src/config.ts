import * as dotenv from 'dotenv';

dotenv.config();

const {
    PORT,
    POSTGRES_HOST,
    POSTGRES_PORT,
    POSTGRES_DB,
    NODE_ENV,
    POSTGRES_DB_TEST,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    SALTROUNDS,
    BCRYBT_TEXT_PASSWORD,
    JWT_SECRET
} = process.env;

export default {
    port : PORT,
    host : POSTGRES_HOST,
    db_port : POSTGRES_PORT,
    database : NODE_ENV==='test'? POSTGRES_DB_TEST : POSTGRES_DB,
    database_test: POSTGRES_DB_TEST,
    db_user : POSTGRES_USER,
    db_password : POSTGRES_PASSWORD,
    salts: SALTROUNDS,
    pepper: BCRYBT_TEXT_PASSWORD,
    tokenSecret: JWT_SECRET
}
