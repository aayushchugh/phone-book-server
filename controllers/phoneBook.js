import PhoneBook from '../models/phoneBook.js';

export async function getAllNumbers(req, res) {
	try {
		const allNumbers = await PhoneBook.find();

		res.send({
			message: 'success',
			status: 200,
			data: allNumbers,
		});
	} catch (err) {
		res.send({
			message: 'internal server error',
			status: 500,
		});
	}
}

export async function getSingleNumber(req, res) {
	try {
		const { id } = req.params;

		const foundNumber = await PhoneBook.findOne({ _id: id });

		res.send({
			message: 'found number',
			status: 200,
			data: foundNumber,
		});
	} catch (err) {
		res.send({
			message: 'number not found',
			status: 404,
		});
	}
}

export async function addNewNumber(req, res) {
	try {
		const { firstName, lastName, phone, email } = req.body;

		const existingNumber = await PhoneBook.findOne({ phone: phone });

		if (existingNumber) {
			return res.send({
				message: 'phone number already exists',
				status: 400,
			});
		}

		const newPhone = new PhoneBook({
			firstName: firstName,
			lastName: lastName,
			phone: phone,
			email: email,
		});

		newPhone.save();

		res.send({
			message: 'successfully added new number',
			status: 201,
			data: newPhone,
		});
	} catch (err) {
		res.send({
			message: 'internal server error',
			status: 500,
		});
	}
}

export async function updateNumber(req, res) {
	const { id } = req.params;
	const { firstName, lastName, phone, email } = req.body;

	const updatedContact = await PhoneBook.findByIdAndUpdate(
		{ _id: id },
		{
			firstName: firstName,
			lastName: lastName,
			email: email,
			phone: phone,
		}
	);

	if (!updatedContact) {
		return res.send({
			message: 'contact not found',
			status: 404,
		});
	}

	res.send({
		message: 'successfully updated',
		status: 200,
		data: updatedContact,
	});
}

export async function deleteNumber(req, res) {
	try {
		const { id } = req.params;

		const deletedNumber = await PhoneBook.findByIdAndDelete(id);

		if (!deletedNumber) {
			return res.send({
				message: 'contact not found',
				status: 404,
			});
		}

		res.send({
			message: 'deleted successfully',
			status: 200,
			data: deletedNumber,
		});
	} catch (err) {
		res.send({
			message: 'internal server error',
			status: 500,
		});
	}
}
