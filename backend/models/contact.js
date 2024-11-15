const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
    },
    phoneno:{ 
        type: String,
    },
    company:{ 
        type: String,
    },
    jobtitle:{
        type: String,
    }
})
const contact = mongoose.model('Contact',contactSchema);
module.exports = contact;
