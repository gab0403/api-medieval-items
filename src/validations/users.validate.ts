import Users from '../interfaces/users.interface';
import HttpException from './httpExeption';

const validateUserName = (users: Users) => {
  if (!users.username) throw new HttpException(400, '"username" is required');
  if (typeof users.username !== 'string') {
    throw new HttpException(422, '"username" must be a string');
  }
  if (users.username.length <= 2) {
    throw new HttpException(422, '"username" length must be at least 3 characters long');
  }
  return true;
};

const validateClasse = (users: Users) => {
  if (!users.classe) throw new HttpException(400, '"classe" is required');
  if (typeof users.classe !== 'string') {
    throw new HttpException(422, '"classe" must be a string');
  }
  if (users.classe.length <= 2) {
    throw new HttpException(422, '"classe" length must be at least 3 characters long');
  }
  return true;
};

const validateLevel = (users: Users) => {
  if (users.level <= 0) {
    throw new HttpException(422, '"level" must be greater than or equal to 1');
  }
  if (!users.level) throw new HttpException(400, '"level" is required');
  if (typeof users.level !== 'number') {
    throw new HttpException(422, '"level" must be a number');
  }
  return true;
};

const validatePass = (users: Users) => {
  if (!users.password) throw new HttpException(400, '"password" is required');
  if (typeof users.password !== 'string') {
    throw new HttpException(422, '"password" must be a string');
  }
  if (users.password.length < 8) {
    throw new HttpException(422, '"password" length must be at least 8 characters long');
  }
  return true;
};

export default {
  validateUserName,
  validateClasse,
  validateLevel,
  validatePass,
};