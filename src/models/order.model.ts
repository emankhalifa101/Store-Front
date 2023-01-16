import db from '../db';
import config from '../config';
import Order from '../interfaces/orders.interface';

class OrderModel {
  async createOrder(o: Order): Promise<Order> {
    try {
      const connection = await db.connect();
      const sql = `INSERT INTO orders (user_id, status) VALUES ($1,$2) returning *`;
      const result = connection.query(sql, [o.user_id, o.status]);
      connection.release();
      return (await result).rows[0];
    } catch (error) {
      throw new Error(`sorry unable to create new order`);
    }
  }

  async getAllOrders(): Promise<Order[]> {
    try {
      const connection = db.connect();
      const sql = `SELECT * FROM orders`;
      const orders = (await connection).query(sql);
      (await connection).release();
      return (await orders).rows;
    } catch (error) {
      throw new Error(`sorry unable to get all orders`);
    }
  }

  async getOrder(user_id: number): Promise<Order> {
    try {
      const connection = db.connect();
      const sql = `SELECT * FROM orders WHERE user_id=($1)`;
      const order = (await connection).query(sql, [user_id]);
      (await connection).release();
      return (await order).rows[0];
    } catch (error) {
      throw new Error(`sorry unable to get this order`);
    }
  }
}

export default OrderModel;
