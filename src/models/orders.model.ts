import { Pool } from 'mysql2/promise';
import Orders from '../interfaces/orders.interface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<Orders[]> {
    const [rows] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Orders',
    );
    return rows as Orders[];
  }
}