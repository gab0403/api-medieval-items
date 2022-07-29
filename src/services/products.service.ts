import connection from '../models/connection';
import ProductsModel from '../models/products.model';
import Products from '../interfaces/products.interface';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public createProducts(products:Products): Promise<Products> {
    const result = this.model.createProducts(products);
    return result;
  }
}