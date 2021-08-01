import { Router } from 'express';

import { addNewNumber } from '../controllers/phoneBook.js';

const router = Router();

router.route('/addNewNumber').post(addNewNumber);

export { router };
