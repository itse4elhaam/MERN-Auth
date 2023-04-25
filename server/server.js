const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user");
const app = express();

const C_STR = "mongodb://127.0.0.1:27017/mernLogin";
mongoose.connect(C_STR);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
	console.log("Successfully connected to MongoDB database");
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Okay");
});

// we're making sure that the new user has valid enough credentials
app.post("/api/register", async (req, res) => {
	try {
		const user = await User.create({
			name: req.body.name,
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
		});
		res.json({ status: "ok" });
		console.log("ok");
	} catch (error) {
		res.json({ status: "error", error: "duplicate email" });
		console.log(error, " :error, can't create user");
	}

	console.log(req.body);
});

// Authenticate the user:
app.post("/api/login", async (req, res) => {
	try {
		const user = await User.findOne({
			email: req.body.email,
			password: req.body.password
		});
		if (user) {
			res.json({ status: "ok" });
			console.log(req.body.email, " is Logged in successfully");
		} else {
			console.log(req.body.email, " doesn't exist");
			res.json({ status: "error", error: "user doesn't exist" });
		}
	} catch (error) {
		res.json({ status: "error", error: "user doesn't exist" });
		console.log(error, " :error, can't find user");
	}
});

// serving static files here:
// app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Listening at: http://localhost:${PORT}/`);
});
