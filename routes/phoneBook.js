import { Router } from 'express';

import {
	addNewNumber,
	getAllNumbers,
	deleteNumber,
} from '../controllers/phoneBook.js';

const router = Router();

router.route('/get-all-numbers').get(getAllNumbers);

router.route('/add-new-number').post(addNewNumber);

router.route('/delete-number/:id').delete(deleteNumber);

export { router };
