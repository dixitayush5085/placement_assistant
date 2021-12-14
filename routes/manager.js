const express = require('express');
const manager = require('../models/manager');
const job = require('../models/job');
const { route } = require('express/lib/application');
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let router = express.Router();

/*
Endpoint for manager logging in
*/
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

/*
Endpoint to add job
*/
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

        console.log(company_name, poc, poc_details);
        res.status(200).send(req.body);
    });

/*
Endpoint to get all jobs    
*/
router.
    route("/get-all-jobs")
    .get((req, res) => {
        job.find().then((item) => {
            res.status(200).send(item);
        })
    })
    .post((req, res) => {
        job.find().then((item) => {
            res.status(200).send(item);
        })
    });

 /* 
 Endpoint to update job using id
 */   
router.
    route("/update-job")
    .get()
    .post((req, res) => {
        const { _id, company_name} = req.body; 
        job.findOneAndUpdate(
            {"_id": _id},
            {"company_name": company_name}
            ).
        then((item) => {
            res.status(200).send(item);
        })
    })

 /* 
 Endpoint to delete job using id
 */       
router.
    route("/delete-job")
    .get()
    .post((req, res) => {
        const { _id } = req.body; 
        job.findOneAndDelete(
            {"_id": _id},
            ).
        then((item) => {
            console.log('job deleted => ', item);
            res.status(200).send(item);
        })
    })    

module.exports = router;