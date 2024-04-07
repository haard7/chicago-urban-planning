// Code for mongoose config in backend
// Filename - backend/index.js

// To connect with your mongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/', {
	dbName: 'amenitiesDB',
	useNewUrlParser: true,
	useUnifiedTopology: true
}, err => err ? console.log(err) :
	console.log('Connected to amenitiesDB database'));

// Schema for users of app
const amenitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
});


const Amenity = mongoose.model('amenity', amenitySchema);
Amenity.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

	resp.send("App is Working");
	// You can check backend is working or not by
	// entering http://loacalhost:5000

	// If you see App is working means
	// backend working properly
});

app.post("/add_amenity", async (req, resp) => {
	try {
		const amenity = new Amenity(req.body);
		let result = await amenity.save();
		result = result.toObject();
		if (result) {
			resp.send(req.body);
			console.log(result);
		} else {
			console.log("amenity already register");
		}

	} catch (e) {
		resp.send("Something Went Wrong");
	}
});

app.get("/get_amenities", async (req, resp) => {
	try {
		const amenities = await Amenity.find();
		resp.send(amenities);
	} catch (e) {
		resp.send("Something Went Wrong");
	}
});

// While running the backend code I am getting the error. can you please resolve it ?




app.listen(5000);
