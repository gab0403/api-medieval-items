import { Pool, ResultSetHeader } from 'mysql2/promise';
import Users from '../interfaces/users.interface';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createUsers(users: Users): Promise<Users> {
    const { username, classe, level, password } = users;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
      [username, classe, level, password],
    );
    const [data] = result;
    const { insertId } = data;
    return { id: insertId, username, classe, level, password };
  }

  public async getByUsernameAndPass(username: string, password: string): Promise<Users> {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
    );
    const [data] = result;
    const [user] = data as Users[];
    return user;
  }
}