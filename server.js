const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http').createServer(app);
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static("public") );
app.set('views', __dirname+'/public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/pages/::pg', (req, res) => {
    res.render(`${req.params.pg}`);
});

http.listen(port, () => {
    console.log(`Server is running on port ${port}. To access http://localhost:${port}`);
});