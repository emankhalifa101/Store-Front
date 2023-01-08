import {Pool} from 'pg';
import config from '../config';

const pool = new Pool({
    user: config.db_user,
    host: config.host,
    database: config.database,
    password: config.db_password,
    port: parseInt(config.db_port as string , 10),
    max: 3
  });

  // To listin on error 
  pool.on('error', (error: Error) => {
    console.error(error.message);
  })

  export default pool;