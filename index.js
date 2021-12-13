var express = require('express');
const manager = require('./routes/manager');
const db = require('./models/db')
const managerDB = require('./models/manager');
var app = express();

app.use(express.urlencoded({ extended: false }));
var port = 8000;

app.use('/manager', manager);

app.get('/', (req, res) => {
    res.send('Home Page')
})


app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});
