const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

        missingitem:{
            type:Number,
            required:true
        },
        misplased:{
            type:String,
            required:true
        },
        ambigusitem:{
            type:String,
            required:true
        },
        duplicateitem:{
            type:String,
            required:true
        },
        srate:{
            type:String,
            required:true
        }
}
)


module.exports = mongoose.model('Postss',postSchema);
