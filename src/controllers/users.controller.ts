import { Request, Response } from 'express';
import UsersService from '../services/users.service';
import createToken from '../middlewares/token.middleware';

export default class UsersController {
  constructor(private usersService = new UsersService()) { }
      
  public createUsers = async (req: Request, res: Response) => {
    const result = req.body;
    await this.usersService.createUsers(result);
    res.status(201).json({ token: createToken });
  };
}