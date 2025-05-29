import { Router } from 'express';
import { scorePassword } from '../controllers/password.controller';

const router = Router();

router.post('/', scorePassword);

export default router;
