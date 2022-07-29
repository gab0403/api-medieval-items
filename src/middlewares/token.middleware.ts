import jwt, { SignOptions } from 'jsonwebtoken';

const options: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = jwt.sign({ 
  username: '',
  classe: '', 
  level: 0, 
  password: '',
}, 'suaSenhaSecreta', options);

export default createToken;