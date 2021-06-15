const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dbConfig = require("./config/db.config");
const { builtinModules } = require("module");
const app = express();
const UserModel = require('./models/User')

app.use(cors());

mongoose.connect(dbConfig.url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
});

mongoose.connection.on('connected', () => {
	console.log('connect to DB');
});

// simple route
app.get("/", (req, res) => {
	const NewUser = new UserModel({
		username: 'Mpoe',
		id: 123,
		password: 'testtest',
		created_date: Date.now(),
		smUsername: 'Mpoe'
	});

	NewUser.save((err) => console.log(err))

	UserModel.find({}, (err, users) => {
		if (err) return console.log(err);
		console.log('USERS', users);
		return res.json(users)
	})
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = {
	mongoose,
}