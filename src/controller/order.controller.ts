import { NextFunction, Request, Response } from 'express';
import config from '../config';
import OrderModel from '../models/order.model';

const controller = new OrderModel();

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await controller.createOrder(req.body);
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
    const orders = await controller.getAllOrders();
    res.json({
      status: '200',
      data: orders,
      messege: 'congratulations^^',
    });
  } catch (error) {
    next(error);
  }
};

export { createOrder, showOrders };
