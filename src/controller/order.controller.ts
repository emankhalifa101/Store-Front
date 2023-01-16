import { NextFunction, Request, Response } from 'express';
import config from '../config';
import OrderModel from '../models/order.model';

const orderModel = new OrderModel();

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await orderModel.createOrder(req.body);
    res.json({
      status: '200',
      data: order,
      messege: 'congratulations order added successfully ^^',
    });
  } catch (error) {
    next(error);
  }
};
const showOrders = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await orderModel.getAllOrders();
    res.json({
      status: '200',
      data: orders,
      messege: 'congratulations^^',
    });
  } catch (error) {
    next(error);
  }
};

const showOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await orderModel.getOrder(parseInt(req.params.user_id));
    res.json({
      status: '200',
      data: order,
      messege: 'congratulations^^',
    });
  } catch (error) {
    next(error);
  }
};

export { createOrder, showOrders, showOrder };
