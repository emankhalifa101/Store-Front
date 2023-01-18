import UserModel from "../../models/user.model";
import db from '../../db';

describe('UserModel Tests',()=> {
    const userModel = new UserModel();
    const user = {
        user_name:"eman",
        email:"test1@gamil.com",
        f_name: "eman",
        l_name: "ahmed",
        password: "1234"
    }
    beforeAll(async()=> {
        const connection = db.connect();
        const sql = `DELETE FROM products_order;\n ALTER SEQUENCE products_order_id_seq RESTART WITH 1;\n
        DELETE orders;\n ALTER SEQUENCE orders_id_seq RESTART WITH 1;\n
        DELETE users;\n ALTER SEQUENCE users_id_seq RESTART WITH 1;\n 
        DELETE FROM products;\n ALTER SEQUENCE products_id_seq RESTART WITH 1;`;
        (await connection).query(sql);
        (await connection).release();
    });
    afterAll(async () => {
        /* const connection = db.connect();
        const sql = `DELETE orders;\n ALTER SEQUENCE orders_id_seq RESTART WITH 1;\n
        DELETE FROM users;\n ALTER SEQUENCE users_id_seq RESTART WITH 1`;
        (await connection).query(sql);
        (await connection).release(); */
    })

    it('should create user in data base',async()=> {
        const connection = db.connect();
        const sql = `DELETE FROM users WHERE email=$1`;
        (await connection).query(sql,[user.email]);
        (await connection).release();
        const newUser = await userModel.addNewUser(user);
        expect(newUser.id).toBeTruthy();
    });

    it('should reteive all users', async()=> {
        const users = await userModel.selectAllUsers();
        expect(users.length).toBeGreaterThan(0);
    });

    it('should get one user',async () => {
        const user = await userModel.selectUser(1);
        expect(user.id).toEqual(1);
    });

    it('should update user',async () => {
        const updatedUser = {
            id:1,
            email: "deda2020",
            user_name: "deda mansour",
            f_name: "deda",
            l_name: "hema",
            password: "2020"
        }
        const user = await userModel.updateUser(updatedUser);
        expect(user.email).toEqual("deda2020");  
    });

    it('should delete user',async ()=> {
        const user2 = {
            email: "dedy@d",
            user_name: "deda mansour",
            f_name: "deda",
            l_name: "hema",
            password: "2020"
        }
        const newUser = await userModel.addNewUser(user2);
        await userModel.deleteUser(2);
        const user = await userModel.selectUser(2);
        expect(user).toBeFalsy();  
    })

})