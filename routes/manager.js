const express = require('express');
const manager = require('../models/manager');
const job = require('../models/job');
const student = require('../models/student')
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
            .then(item => {
                res.status(200).send({
                    item,
                    msg: 'Job added successfully'
                });
            })
            .catch(err => {
                res.status(400).send({
                    err
                });
            });
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
        job.find()
            .then((item) => {
                res.status(200).send(item);
            }).catch(err => {
                res.status(400).send({
                    err
                });
            });

    });

/* 
Endpoint to update job using id
*/
router.
    route("/update-job")
    .get()
    .post((req, res) => {
        const { _id, company_name } = req.body;
        job.findOneAndUpdate(
            { "_id": _id },
            { "company_name": company_name }
        )
            .then((item) => {
                res.status(200).send({
                    item,
                    msg: 'Job updated successfully'
                });
            })
            .catch(err => {
                res.status(400).send({
                    err
                });
            });
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
            { "_id": _id },
        ).
            then((item) => {
                res.status(200).send({ 
                    item,
                    msg: 'Job deleted successfully'
                });
            })
            .catch(err => {
                res.status(400).send({
                    err
                });
            });
    })

router.
        route("/add-student-email")
        .post((req, res) => {
            const { email } =  req.body;
            const newStudent = new student({
                email: email
            });

            newStudent.save()
            .then(item => {
                res.status(200).send({
                    item,
                    msg: 'Student added successfully'
                });
            })
            .catch(err => {
                res.status(400).send({
                    err
                });
            });
        })

router.
        route("/all-students")
        .get((req, res) => {
            student.find().then((item) => {
                res.status(200).send(item);
            })
        })         

module.exports = router;

