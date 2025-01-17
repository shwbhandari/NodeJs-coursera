const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;
const Schema = mongoose.Schema;

const promotionsSchema = new Schema({
    name:{
        type: String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true
    },
    label:{
        type:String,
        default:'',
    },
    price:{
        type:Currency,
        min:0,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
});
var Promotions = mongoose.model('Promotion',promotionsSchema);
module.exports = Promotions ;
  
