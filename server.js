import express from 'express';
import mongoose from 'mongoose';
import app from './app.js';

mongoose.connect(
	process.env.DB,
	{ useUnifiedTopology: true, useNewUrlParser: true },
	() => {
		app.listen(8000);
	}
);
