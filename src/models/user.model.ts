import db from '../db';
import bcrybt from 'bcrypt';
import config from '../config';
import User from '../interfaces/user.interface';

const passwordHashing = (password: string) => {
  const solt = parseInt(config.salts as string, 10);
  return bcrybt.hashSync(`${password}${config.pepper}`, solt);
};

class UserModel {
  //add  new user
  async addNewUser(user: User): Promise<User> {
    try {
      //connect to data base
      const connection = await db.connect();
      //query to insert into DB
      const sql = `INSERT INTO users (email, user_name , f_name, l_name, password) 
                VALUES ($1,$2,$3,$4,$5) returning id, email, user_name, f_name, l_name`;
      // run query
      const result = await connection.query(sql, [
        user.email,
        user.user_name,
        user.f_name,
        user.l_name,
        passwordHashing(user.password),
      ]);
      //close connection
      connection.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`unable to create this user ${user.user_name}`);
    }
  }

  //get all users
  async selectAllUsers(): Promise<User[]> {
    try {
      const connection = db.connect();
      const sql = `SELECT id, email, user_name, f_name, l_name, password FROM users`;
      const allUsers = (await connection).query(sql);
      (await connection).release();
      return (await allUsers).rows;
    } catch (err) {
      throw new Error(`unable to get all users`);
    }
  }

  // get specific user
  async selectUser(id: number): Promise<User> {
    try {
      const connection = db.connect();
      const sql = `SELECT id, email, user_name, f_name, l_name FROM users WHERE id=($1)`;
      const user = (await connection).query(sql, [id]);
      (await connection).release();
      return (await user).rows[0];
    } catch (error) {
      throw new Error(`unable to get this user${error}`);
    }
  }
  //update user
  async updateUser(user: User): Promise<User> {
    try {
      const connection = db.connect();
      const sql = `UPDATE users 
                SET  email=($1), user_name=($2), f_name=($3), l_name=($4),password=($5) 
                WHERE id=($6) returning id, email, user_name, f_name, l_name`;
      const updatedUser = (await connection).query(sql, [
        user.email,
        user.user_name,
        user.f_name,
        user.l_name,
        passwordHashing(user.password),
        user.id,
      ]);
      (await connection).release();
      return (await updatedUser).rows[0];
    } catch (error) {
      throw new Error(`unable to get this user${error}`);
    }
  }

  // delete user
  async deleteUser(id: number): Promise<User> {
    try {
      const connection = db.connect();
      const sql = `DELETE FROM users 
            WHERE id=($1) returning id, email, user_name, f_name, l_name`;
      const result = (await connection).query(sql, [id]);
      (await connection).release();
      return (await result).rows[0];
    } catch (error) {
      throw new Error(`unable to get this user${error}`);
    }
  }

  // authenticate user
  async authenticateUser(email: string, pass: string): Promise<User | null> {
    try {
      const connection = db.connect();
      const sql = `SELECT password FROM users WHERE email=($1)`;
      const result = (await connection).query(sql, [email]);
      if ((await result).rows.length > 0) {
        const { password } = (await result).rows[0];
        const isPasswordValid = bcrybt.compareSync(
          `${password}${config.pepper}`,
          passwordHashing(pass)
        );
        if (isPasswordValid) {
          const loggedUser = (await connection).query(
            `SELECT id, email, user_name, f_name, l_name FROM users WHERE email=($1)`,
            [email]
          );
          return (await loggedUser).rows[0];
        }
      }

      (await connection).release();
      return null;
    } catch (error) {
      throw new Error(`unable to get this user${error}`);
    }
  }
}

export default UserModel;
