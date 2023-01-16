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
    /* beforeAll(async()=> {
        const connection = db.connect();
        const sql = `DELETE FROM users WHERE email=$1`;
        (await connection).query(sql,[user.email]);
        (await connection).release();
    }) */

    it('should create user in data base',async()=> {
        const connection = db.connect();
        const sql = `DELETE FROM users WHERE email=$1`;
        (await connection).query(sql,[user.email]);
        (await connection).release();
        const newUser = await userModel.addNewUser(user);
        expect(newUser.id).toBeTruthy();
        expect(newUser.email).toEqual("test1@gamil.com")
    });

    it('should reteive all users', async()=> {
        const users = await userModel.selectAllUsers();
        expect(users.length).toBeGreaterThan(0);
    });

    it('should get one user',async () => {
        const user = await userModel.selectUser(8);
        expect(user.id).toEqual(8);
    });

    it('should update user',async () => {
        const updatedUser = {
            id: 8,
            email: "deda1111",
            user_name: "deda mansour",
            f_name: "deda",
            l_name: "hema",
            password: "2020"
        }
        const user = await userModel.updateUser(updatedUser);
        expect(user.email).toEqual("deda1111");  
    });

    it('should delete user',async ()=> {
        await userModel.deleteUser(22);
        const user = await userModel.selectUser(22);
        expect(user).toBeFalsy();  
    })

})