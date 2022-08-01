import { Request, Response } from 'express';
import Users from '../interfaces/users.interface';
import LoginService from '../services/login.service';
// import createToken from '../middlewares/token.middleware';

export default class LoginController {
  constructor(private loginService = new LoginService()) { }
        
  public login = async (req: Request, res: Response) => {
    const result = req.body as Users;
    const login = await this.loginService.validateLogin(result);
   
    return res.status(200).json(login);
  };
}