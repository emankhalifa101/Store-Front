import { NextFunction, Request, Response } from 'express';
import ProductModel from '../models/product.model';

const productModel = new ProductModel();

//create new product

const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await productModel.createProduct(req.body);
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
    const products = await productModel.showAll();
    res.json({
      status: '200',
      data: products,
      messege: 'congratulations ^^',
    });
  } catch (error) {
    next(error);
  }
};

//get one product
const showProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await productModel.showProduct(parseInt(req.params.id));
    res.json({
      status: '200',
      data: product,
      messege: 'congratulations',
    });
  } catch (err) {
    next(err);
  }
};

export { createProduct, showAllPRoducts, showProduct };
