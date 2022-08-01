import Products from '../interfaces/products.interface';
import HttpException from './httpExeption';

const validateName = (products: Products) => {
  if (!products.name) throw new HttpException(400, '"name" is required');
  if (typeof products.name !== 'string') {
    throw new HttpException(422, '"name" must be a string');
  }
  if (products.name.length < 2) {
    throw new HttpException(422, '"name" length must be at least 3 characters long');
  }
  return true;
};

const validateAmount = (products: Products) => {
  if (!products.amount) throw new HttpException(400, '"amount" is required');
  if (typeof products.amount !== 'string') {
    throw new HttpException(422, '"amount" must be a string');
  }
  if (products.amount.length < 2) {
    throw new HttpException(422, '"amount" length must be at least 3 characters long');
  }
  return true;
};

export default { validateName, validateAmount };