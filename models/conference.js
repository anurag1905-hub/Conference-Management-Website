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
        type:String,
        required:true
    },
    endTime:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    venue:{
        type:String,
        required:true
    },
    status:{
        type:String
    },
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    capacityOfRoom:{
        type:String,
        required:true
    },
    invitedUsers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    announcements:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Announcement'
    }]
},{
    timestamps:true
});

const Conference = mongoose.model('Conference',conferenceSchema);

module.exports = Conference;