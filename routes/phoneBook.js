import { Router } from 'express';

import { addNewNumber, getAllNumbers } from '../controllers/phoneBook.js';

const router = Router();

router.route('/get-all-numbers').get(getAllNumbers);

router.route('/add-new-number').post(addNewNumber);

export { router };
