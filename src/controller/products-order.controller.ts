import { NextFunction, Request, Response } from 'express';
import ProductsOrderModel from '../models/products-order.model';

const productOrderModel = new ProductsOrderModel();

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await productOrderModel.create(req.body);
    res.json({
      status: '200',
      data: result,
      messege: 'congratulations products per order added successfully ^^',
    });
  } catch (error) {
    next(error);
  }
};
const showAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await productOrderModel.showAll(parseInt(req.params.order_id));
    res.json({
      status: '200',
      data: result,
      messege: 'congratulations^^',
    });
  } catch (error) {
    next(error);
  }
};
export { create, showAll };
