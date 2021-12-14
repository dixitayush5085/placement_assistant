var mongoose  = require('mongoose');

mongoose.connect('mongodb+srv://ayush0809:ayush0809@cluster0.errkv.mongodb.net/placement_assistant?retryWrites=true&w=majority', (err)=> {
     if(!err){
         console.log('db connected');
     }else {
        console.log(err);
     }
 } );