const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
      email: {
        type: String,
        required: true,
      },
      full_name: {
        type: String,
        required: false,
      },
      current_location: {
        type: String,
        required: false,
      },
      contact_no: {
        type: String,
        required: false,
      },
      resume_url: {
        type: String,
        required: false,
      },
      graduation_year: {
        from: {
          type: Date,
          required: false
        },
        to:{ 
          type: Date,
          required: false
        }
      },
      college_name: {
        type: String,
        required: false
      },
      tenth_percentage_cgpa: {
        type: String,
        required: false,
      },
      twelfth_percentage_cgpa: {
        type: String,
        required: false,          
      },
      ug_percentage_cgpa: {
        type: String,
        required: false,          
      },
      degree: {
        type: String,
        required: false,
      },
      stream: {
        type: String,
        required: false,
      },
      skills: {
        type: [String],
        required: false,
      }
})

module.exports = Student = mongoose.model('student', StudentSchema);