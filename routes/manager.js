const express = require('express');
const manager = require('../models/manager');
const job = require('../models/job');
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let router = express.Router();

router.
    route("/login")
    .get((req, res) => {
        res.send("manager login page");
    })
    .post((req, res) => {
        const { username, password } = req.body;
        console.log(username);

        manager.find().then((item) => {
            item.forEach((item) => {
                if (item.username === username)
                    res.status({ username, password }, 200);
            })
        });
    });

router.
    route("/add-job")
    .get((req, res) => {
        res.send("manager add job page");
    })
    .post((req, res) => {
        const { company_name, poc, poc_details } = req.body;

        const newJob = new job(
            {
                company_name: company_name,
                poc: poc,
                poc_details: poc_details
            }
        );

        newJob.save()
            .then(item => console.log(item))
            .catch(err => console.log(err));

        console.log(company_name, poc,poc_details);
        res.status(200).send(req.body);
    });

module.exports = router;