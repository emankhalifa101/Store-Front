import db from '../db';
import Product from '../interfaces/product.interface';

class ProductModel {
  private productFormating(p: Product) {
    const x = {
      id: p.id,
      name: p.name,
      price: p.price,
      description: p.description,
      category: p.category,
    };
    console.log('xxx', x);
    return x;
  }

  async createProduct(product: Product): Promise<Product> {
    try {
      const connection = db.connect();
      const sql = `INSERT INTO products (name, price, description, category) 
            VALUES ($1,$2,$3,$4) returning id, name, price, description, category`;
      const result = (await connection).query(sql, [
        product.name,
        product.price,
        product.description,
        product.category,
      ]);
      (await connection).release();
      return (await result).rows[0];
    } catch (error) {
      throw new Error(`nuable to create this product please try again`);
    }
  }

  async showAll(): Promise<Product[]> {
    try {
      const connection = db.connect();
      const sql = `SELECT * FROM products`;
      const result = (await connection).query(sql);
      console.log('result', result);
      (await connection).release();
      return (await result).rows.map((item) => this.productFormating(item));
    } catch (error) {
      throw new Error(`sorry could not get all products please try again ${error}`);
    }
  }

  async showProduct(id: number): Promise<Product> {
    try {
      const connection = db.connect();
      const sql = `SELECT * FROM products WHERE id=($1)`;
      const result = (await connection).query(sql, [id]);
      console.log('result', result);
      (await connection).release();
      return (await result).rows[0];
    } catch (error) {
      console.log('error', error);
      throw new Error(`sorry could not get this product please try again ${error}`);
    }
  }
}

export default ProductModel;
