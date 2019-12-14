var express = require('express');

var app = express();

var port = process.env.PORT || 3031;

app.get('/', (req, res)=>{
	res.send("WElcome to My API !!!");
});

app.listen(port,()=>{
	console.log("Running on " + port);
});