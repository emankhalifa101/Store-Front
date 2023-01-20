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
       
    });
    afterAll(async () => {})

    it('should create user in data base',async()=> {
        try {
            const newUser = await userModel.addNewUser(user);
            console.log('user',newUser)
            expect(newUser.id).toBeTruthy();
        }catch(err){
            console.log('err',err)
        }
        
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