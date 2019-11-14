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
	var type = req.query.type
	var weight = Number(req.query.weight)
	var result = 0;
	switch (type) {
		case "ls":
			break;
		case "lm":
			break;
		case "le":
			break;
		case "fc":
			break;
	}
	console.log(result);
	res.render("pages/week09", {
	  result: result
	})
}