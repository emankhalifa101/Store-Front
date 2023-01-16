import OrderModel from "../../models/order.model";
import UserModel from "../../models/user.model";
import ProductModel from "../../models/product.model";
import User from "../../interfaces/user.interface";

describe('Orders Model Tests ', ()=>{
    const orderModel = new OrderModel();
    const userModel = new UserModel();
    const productModel = new ProductModel();

    let user = {
        user_name:"test2",
        email:"test2@gamil.com",
        f_name: "tets2",
        l_name: "ahmed",
        password: "1234"
    }as User;
    const newProduct = {
        "name": "headset",
        "price": 1000,
        "description": "p6666",
        "category": "c5"
    }
    const newOrder = {
        "user_id": 9,
        "status":"inprogress"
      }

    
    beforeAll(async () => {
        user = await userModel.addNewUser(user);
        await productModel.createProduct(newProduct);
        
    });
    afterAll(async () => {
        user.id && userModel.deleteUser(user.id);
    })  
    it('should create new order',async () => {
        /* const connection = db.connect();
        const sql = `DELETE FROM orders`;
        (await connection).query(sql);
        (await connection).release(); */
        const order = await orderModel.createOrder(newOrder);
        expect(order.id).toBeTruthy();
    });
    it('should reteive all orders', async()=> {
        const orders = await orderModel.getAllOrders();
        expect(orders.length).toBeGreaterThan(0);
    });

    it('should get one order',async () => {
        const order = await orderModel.getOrder(8);
        expect(order.id).toEqual(1);
    });
})