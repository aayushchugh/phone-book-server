import { Router } from 'express';

import {
	getAllNumbers,
	getSingleNumber,
	addNewNumber,
	deleteNumber,
	updateNumber,
} from '../controllers/phoneBook.js';

const router = Router();

router.route('/get-all-numbers').get(getAllNumbers);

router.route('/get-number/:id').get(getSingleNumber);

router.route('/add-new-number').post(addNewNumber);

router.route('/delete-number/:id').delete(deleteNumber);

router.route('/update-number/:id').put(updateNumber);

export { router };
