import connection from '../models/connection';
import UsersModel from '../models/users.model';
import Users from '../interfaces/users.interface';
import valid from '../validations/users.validate';

export default class UsersService {
  public model: UsersModel;
  
  constructor() {
    this.model = new UsersModel(connection);
  }
  
  public async createUsers(users:Users): Promise<Users> {
    valid.validateUserName(users);
    valid.validateClasse(users);
    valid.validateLevel(users);
    valid.validatePass(users);
    const result = await this.model.createUsers(users);
    return result;
  }
}