import ProductModel from "../../models/product.model";
import db from '../../db'

describe('Products Model Tests ', ()=>{
    const productModel = new ProductModel();
    const newProduct = {
        "name": "p10",
        "price": 200,
        "description": "p6666",
        "category": "c2"
    }
    beforeAll(async()=> {
        
    })
    afterAll(async()=> {
       
    })
    it('should create new product in DB',async()=> {
        const p = await productModel.createProduct(newProduct);
        //expect(p.id).toBeTruthy();
    });
    it('should reteive all products', async()=> {
        const users = await productModel.showAll();
        expect(users.length).toBeGreaterThan(0);
    });

    it('should get one product',async () => {
        const user = await productModel.showProduct(1);
        expect(user.id).toEqual(1);
    });
})