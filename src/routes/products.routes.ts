import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const router = Router();
const productsController = new ProductsController();

router.get('/products', productsController.getAllProducts);
router.post('/products', productsController.createProducts);
export default router;