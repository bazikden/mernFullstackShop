const mongoose = require('mongoose')
const aggregatePaginate = require('mongoose-paginate')

const Food = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    category: {type:String},
    img:{data:Buffer,contentType:String},
    date:{type:Date,default:Date.now}
})

Food.plugin(aggregatePaginate)

module.exports = mongoose.model('Food',Food)