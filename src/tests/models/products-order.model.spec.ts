import OrderModel from "../../models/order.model";
import UserModel from "../../models/user.model";
import ProductModel from "../../models/product.model";
import User from "../../interfaces/user.interface";
import ProductsOrderModel from "../../models/products-order.model";
import db from '../../db'

describe('Products-Order Model Tests ', ()=>{
    const orderModel = new OrderModel();
    const userModel = new UserModel();
    const productModel = new ProductModel();
    const productsOrderModel = new ProductsOrderModel()

    let user = {
        user_name:"test2",
        email:"store@gamil.com",
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
        "user_id": 1,
        "status":"inprogress"
    }
    const productsOrder = {
        "order_id": 1,
        "product_id": 1,
        "quantity": 9
      }

    beforeAll(async () => {});
    afterAll(async () => {})   
    it('should create new productsorder',async () => {
        await userModel.addNewUser(user);
        await productModel.createProduct(newProduct);
        await orderModel.createOrder(newOrder);
        const po = await productsOrderModel.create(productsOrder)
        expect(po.id).toBeTruthy();
    });
    it('should reteive all products per order', async()=> {
        const result = await productsOrderModel.showAll(1)
        expect(result.length).toBeGreaterThan(0);
    });
})