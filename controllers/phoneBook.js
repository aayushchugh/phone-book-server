import PhoneBook from '../models/phoneBook.js';

export async function getAllNumbers(req, res) {
	const allNumbers = await PhoneBook.find();

	res.send({
		message: 'success',
		status: 200,
		data: allNumbers,
	});
}

export async function addNewNumber(req, res) {
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
}
