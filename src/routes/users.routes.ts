import { Router } from 'express';
import UsersController from '../controllers/users.controller';

const router = Router();
const usersController = new UsersController();

router.post('/users', usersController.createUsers);

export default router;