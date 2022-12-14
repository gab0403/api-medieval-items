import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) { }
    
  public createProducts = async (req: Request, res: Response) => {
    const result = req.body;
    const productCreated = await this.productsService.createProducts(result);
    res.status(201).json(productCreated);
  };

  public getAllProducts = async (_req:Request, res:Response) => {
    const getAll = await this.productsService.getAllProducts();
    res.status(200).json(getAll);
  };
}