const mongoose = require('mongoose');

const conferenceSchema = new mongoose.Schema({
    eventName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    startTime:{
        type:Date,
        required:true
    },
    endTime:{
        type:Date,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    venue:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

const Conference = mongoose.model('Conference',conferenceSchema);

module.exports = Conference;