import { Router } from 'express';

import { addNewNumber } from '../controllers/book.js';

const router = Router();

router.route('/addNewNumber').post(addNewNumber);

export { router };
