const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    book : {
        type : String,
        required : true
    },

    name : {
        type : String,
        required : true
    },
    
    price : {
        type : Number,
        required : true
    },
    
    date : {
        type : Date,
        required : true
    },
    
    author : {
        type : String,
        required : true
    },
    
    copy : {
        type : Number,
        required : true
    }
})

const firstSchema = mongoose.model("FirstSchema", Schema);

module.exports = firstSchema

