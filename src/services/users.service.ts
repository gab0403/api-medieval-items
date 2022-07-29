import connection from '../models/connection';
import UsersModel from '../models/users.model';
import Users from '../interfaces/users.interface';

export default class UsersService {
  public model: UsersModel;
  
  constructor() {
    this.model = new UsersModel(connection);
  }
  
  public async createUsers(users:Users): Promise<Users> {
    const result = await this.model.createUsers(users);
    return result;
  }
}