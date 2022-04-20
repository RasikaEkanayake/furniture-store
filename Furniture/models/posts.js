const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    OrderID:{
        type:String,
        required:true
    },
    CheckedDate:{
        type:String,
        required:true
    },
    ArrivalDate:{
        type:String,
        required:true
    },
    BuyerID:{
        type:String,
        required:true
    },
    requirment1:{
        type:String,
        required:true
    },
    requirment2:{
        type:String,
        required:true
    },
    Qualityrate:{
        type:String,
        required:true
    }
}
)


module.exports = mongoose.model('Posts',postSchema);
