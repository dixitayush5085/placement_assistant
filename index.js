var express = require('express');
const manager = require('./routes/manager');

var app = express();
var port = 8000;

app.use('/manager', manager);

app.get('/', (req, res) => {
    res.send('Home Page')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
