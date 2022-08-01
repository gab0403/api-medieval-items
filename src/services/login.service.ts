import connection from '../models/connection';
import UsersModel from '../models/users.model';
import Users from '../interfaces/users.interface';
import HttpException from '../../validations/httpExeption';
import createToken from '../middlewares/token.middleware';

export default class LoginService {
  public model: UsersModel;
  
  constructor() {
    this.model = new UsersModel(connection);
  }
  
  public async validateLogin(userCredentials: Users) {
    const resultLogin = await 
    this.model.getByUsernameAndPass(userCredentials.username, userCredentials.password);
    if (!userCredentials.username) throw new HttpException(400, '"username" is required');
  
    if (!userCredentials.password) throw new HttpException(400, '"password" is required');

    if (resultLogin === undefined) {
      throw new HttpException(401, 'Username or password invalid');
    }

    return { token: createToken };
  }
}
