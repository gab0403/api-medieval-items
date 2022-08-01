import connection from '../models/connection';
import OrdersModel from '../models/orders.model';
import Orders from '../interfaces/orders.interface';
import ProductsModel from '../models/products.model';

export default class OrdersService {
  public model: OrdersModel;

  public product: ProductsModel;
  
  constructor() {
    this.model = new OrdersModel(connection);
    this.product = new ProductsModel(connection);
  }
  
  public async getAllOrders(): Promise<Orders[]> {
    const result = await this.model.getAllOrders();
    const products = await this.product.getAllProducts();
    const resultOrders = result.map(({ id, userId }) => {
      const productsIds = products.filter(({ orderId }) => orderId === id)
        .map((product) => product.id);
      return { id, userId, productsIds };
    });

    return resultOrders;
  }
}