const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/',(req,res)=>{
	//res.send( THE HOMIES HOMEPAGE);
});

app.listen(3000);
