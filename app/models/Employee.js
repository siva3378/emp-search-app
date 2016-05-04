// grab the mongoose module
var mongoose =  require('bluebird').promisifyAll(require('mongoose'));

// define our model

var EmpSchema = new mongoose.Schema({
    "gender": String,
    "first_name": String,
    "last_name": String,
    "role": String,
    "contact": {
        "office": String,
        "mobile": String,
        "sms": String,
        "email": String
    }
});

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Employee', EmpSchema);
