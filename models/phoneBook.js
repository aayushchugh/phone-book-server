import mongoose from 'mongoose';

const phoneBookSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	phone: { type: Number, required: true },
	email: { type: String },
});

const PhoneBook = mongoose.model('PhoneBook', phoneBookSchema);

export default PhoneBook;
