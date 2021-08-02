import mongoose from 'mongoose';
import app from './app.js';

const PORT = process.env.PORT || 8000;

mongoose.connect(
	process.env.DB,
	{ useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false },
	() => {
		app.listen(PORT);
	}
);
