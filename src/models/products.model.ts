import { Pool, ResultSetHeader } from 'mysql2/promise';
import Products from '../interfaces/products.interface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createProducts(products: Products): Promise<Products> {
    const { name, amount } = products;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [data] = result;
    const { insertId } = data;
    return { id: insertId, name, amount };
  }
}