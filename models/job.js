const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const JobSchema = new Schema(
    {
        company_name: {
            type: String,
            required: true
        },
        poc: {
            type: String,
            required: true
        },
        poc_details: {
            type: String,
            required: true
        },
        available: {
            type: Boolean,
            default: true,
            required: false
        }
    }
);

module.exports = Job = mongoose.model('job', JobSchema);