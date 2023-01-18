import OrderModel from "../../models/order.model";
import UserModel from "../../models/user.model";
import ProductModel from "../../models/product.model";
import User from "../../interfaces/user.interface";
import db from '../../db'

describe('Orders Model Tests ', ()=>{
    const orderModel = new OrderModel();
    const userModel = new UserModel();
    const productModel = new ProductModel();

    let user = {
        user_name:"test2",
        email:"test5050@gamil.com",
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
    let newOrder = {
        "user_id": 1,
        "status":"inprogress"
      }

    
    beforeAll(async () => {
        user = await userModel.addNewUser(user);
        await productModel.createProduct(newProduct); 
    });
    afterAll(async () => {
        const connection = db.connect();
        const sql =`DELETE FROM products_order;\n ALTER SEQUENCE products_order_id_seq RESTART WITH 1;\n
        DELETE FROM orders;\n ALTER SEQUENCE orders_id_seq RESTART WITH 1;\n
        DELETE FROM users;\n ALTER SEQUENCE users_id_seq RESTART WITH 1;\n
        DELETE FROM products;\n ALTER SEQUENCE products_id_seq RESTART WITH 1;`;
        (await connection).query(sql);
        (await connection).release();
    })  
    it('should create new order',async () => {
        const order = await orderModel.createOrder(newOrder);
        expect(order.id).toBeTruthy();
    });
    it('should reteive all orders', async()=> {
        const orders = await orderModel.getAllOrders();
        expect(orders.length).toBeGreaterThan(0);
    });

    it('should get one order',async () => {
        const order = await orderModel.getOrder(1);
        expect(order.id).toEqual(1);
    });
})