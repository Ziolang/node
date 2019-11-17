const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/mail', computeMail)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

function computeMail(req, res){
	console.log("Mail Function");
	var type = req.query.type;
	var weight = Number(req.query.weight);
	var result = 0;
	var change = false;

	if (weight > 13) {
		type = "er";
	}

	if (type == "ls" || type == "lm") {
		if (weight > 3.5) {
			type = "le";
			change = true;
		}
	}

	if (type == "ls") {
		if (weight <= 1) {
			result = .55;
		}
		else if (weight <= 2) {
			result = .70;
		}
		else if (weight <= 3) {
			result = .85;
		}
		else if (weight <= 3.5) {
			result = 1.00;
		}
	}

	if (type == "lm") {
		if (weight <= 1) {
			result = .50;
		}
		else if (weight <= 2) {
			result = .65;
		}
		else if (weight <= 3) {
			result = .80;
		}
		else if (weight <= 3.5) {
			result = .95;
		}
	}

	if (type == "le") { 
		if (weight <= 1) {
			result = 1;
		}
		else if (weight <= 2) {
			result = 1.15;
		}
		else if (weight <= 3) {
			result = 1.30;
		}
		else if (weight <= 4) {
			result = 1.45;
		}
		else if (weight <= 5) {
			result = 1.60;
		}
		else if (weight <= 6) {
			result = 1.75;
		}
		else if (weight <= 7) {
			result = 1.90;
		}
		else if (weight <= 8) {
			result = 2.05;
		}
		else if (weight <= 9) {
			result = 2.20;
		}
		else if (weight <= 10) {
			result = 2.35;
		}
		else if (weight <= 11) {
			result = 2.50;
		}
		else if (weight <= 12) {
			result = 2.65;
		}
		else if (weight <= 13) {
			result = 2.80;
		}
	}

	if (type == "fc") { 
		if (weight <= 4) {
			result = 3.66;
		}
		else if (weight <= 8) {
			result = 4.39;
		}
		else if (weight <= 12) {
			result = 5.19;
		}
		else if (weight <= 13) {
			result = 5.71;
		}
	}
	var message = "";

	if (type == "er") {
		res.render("pages/week09", { message: "ERROR: Item over weight." })
		return;
	}

	result = Number(result).toFixed(2);
	
	if (change) {
		let orig = req.query.type;
		let temp = "Letters ";

		if (orig == "ls")
			temp += "(Stamped)";
		if (orig == "lm")
			temp += "(Metered)";

		message = "The weight is too much for " + temp + ". You may ship this weight with Large Envelopes for $" + result + ".";
		res.render("pages/week09", { message: message });
	}
	else {
		message = "The cost to ship this mail is $" + result + ".";
		res.render("pages/week09", { message: message });
	}
}