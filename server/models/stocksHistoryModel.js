var mongoose = require('mongoose');

const stocksHistorySchema = new mongoose.Schema({
    "date" : Date,
	"open" : Number,
	"close" : Number,
	"low" : Number,
	"high" : Number,
	"volume" : Number,
	"company" : String
})

module.exports = mongoose.model('stockshistory', stocksHistorySchema, 'stockshistory');