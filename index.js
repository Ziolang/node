const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('week09/mail', computeMail)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

function computeMail(req, res){
	console.log("Mail Function");
	var type = req.query.type
	var weight = Number(req.query.weight)
	var result = 0;
	
	if (type == "ls") {
		if (weight > 3.5) {
			type = "le";
		}
		else {
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
	}

	if (type == "lm") {
		if (weight > 3.5) {
			type = "le";
		}
		else {
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
	}

	if (type == "lm") { 
		if (weight > 13) {
			type = "fc";
		}
		else {
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
	}

	res.render("pages/week09", { result: result })
}