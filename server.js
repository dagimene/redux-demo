const express = require('express');

const app = express();

app.use('/dist', express.static('dist'));
app.use('/', express.static('public'));
app.get('/', function(req, res){
	res.sendfile('./public/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening in port ${port}`));
