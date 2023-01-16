import db from '../db';
import Error from '../interfaces/error.interface';
import ProductsOrder from '../interfaces/products-order.interface';

class ProductsOrderModel {
  async create(pO: ProductsOrder): Promise<ProductsOrder> {
    try {
      const connection = db.connect();
      const sql = `INSERT INTO products_order (order_id, product_id, quantity) 
                    VALUES ($1,$2,$3) returning *`;
      const result = (await connection).query(sql, [
        pO.order_id,
        pO.product_id,
        pO.quantity,
      ]);
      (await connection).release();
      return (await result).rows[0];
    } catch (err: any) {
      throw new Error(
        `nuable to create this productOrder please try again: ${err.messege}`
      );
    }
  }
  async showAll(order_id: number): Promise<ProductsOrder[]> {
    try {
      const connection = db.connect();
      //const sql = `SELECT * FROM orders AS o LEFT JOIN products_order AS po ON o.id=$1 `;

      const sql = `SELECT o.id AS id, op.order_id, op.product_id, 
        JSON_AGG(JSONB_BUILD_OBJECT(
            'productId', p.id, 'name', p.name, 'description', p.description,'category', p.category,
             'price', p.price, 'quantity', op.quantity)) AS products 
            FROM orders AS o LEFT JOIN products_order AS op ON o.id = op.order_id 
            LEFT JOIN products AS p ON op.product_id = p.id 
        WHERE o.id=$1 GROUP BY o.id, op.order_id, op.product_id`;
      const result = (await connection).query(sql, [order_id]);
      (await connection).release();
      return (await result).rows;
    } catch (err: any) {
      throw new Error(`unable to get all: ${err.messege}`);
    }
  }
}

export default ProductsOrderModel;
