import { NextFunction, Request, Response } from 'express';
import Jwt from 'jsonwebtoken';
import config from '../config';
import UserModel from '../models/user.model';

const userModel = new UserModel();

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userModel.addNewUser(req.body);
    res.json({
      status: '200',
      data: user,
      messege: 'congratulations user added successfully ^^',
    });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const allUsers = await userModel.selectAllUsers();
    res.json({
      status: '200',
      data: allUsers,
      messege: 'congratulations',
    });
  } catch (error) {
    next(error);
  }
};
const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userModel.selectUser(parseInt(req.params.id));
    res.json({
      status: '200',
      data: user,
      messege: 'congratulations',
    });
  } catch (error) {
    next(error);
  }
};
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userModel.updateUser(req.body);
    res.json({
      status: '200',
      data: user,
      messege: 'congratulations user updated',
    });
  } catch (error) {
    next(error);
  }
};
const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userModel.deleteUser(parseInt(req.params.id));
    res.json({
      status: '200',
      data: user,
      messege: 'congratulations user deleted',
    });
  } catch (error) {
    next(error);
  }
};

const authenticateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.authenticateUser(email, password);
    const token = Jwt.sign({ user }, config.tokenSecret as string);
    if (!user) {
      res.status(401).json({
        status: 'un authorized user',
        data: user,
        messege: 'sorry email or password you entered not correct please try again ',
      });
    } else {
      res.json({
        status: '200',
        data: { ...user, token },
        messege: 'user authenticated successfully ^^',
      });
    }
  } catch (error) {
    next(error);
  }
};

export { getAllUsers, createUser, getUser, updateUser, deleteUser, authenticateUser };
