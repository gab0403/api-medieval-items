import connection from '../models/connection';
import ProductsModel from '../models/products.model';
import Products from '../interfaces/products.interface';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async createProducts(products:Products): Promise<Products> {
    const result = await this.model.createProducts(products);
    return result;
  }

  public async getAllProducts():Promise<Products[]> {
    const result = await this.model.getAllProducts();
    return result;
  }
}