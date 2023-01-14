import { NextFunction, Request, Response } from 'express';
import ProductModel from '../models/product.model';

const controller = new ProductModel();

//create new product

const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = controller.createProduct(req.body);
    res.json({
      status: '200',
      data: product,
      messege: 'congratulations product added successfully ^^',
    });
  } catch (error) {
    next(error);
  }
};

//show all products
const showAllPRoducts = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const products = controller.showAll();
    products.then((items) => {
      res.json({
        status: '200',
        data: { ...items },
        messege: 'congratulations ^^',
      });
    });
  } catch (error) {
    next(error);
  }
};

//get one product
const showProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = controller.showProduct(parseInt(req.params.id));
    product.then((P) => {
      res.json({
        status: '200',
        data: P,
        messege: 'congratulations',
      });
    });
  } catch (err) {
    next(err);
  }
};

export { createProduct, showAllPRoducts, showProduct };
