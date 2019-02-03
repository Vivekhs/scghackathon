const stockHistoryModel = require('../../models/stocksHistoryModel');

module.exports = {
    findStocksHistory : (search, filter, limit)=>{
        return stockHistoryModel.find(search, filter).limit(limit);
    },

    findDistinctRecords: (key) =>{
        return stockHistoryModel.distinct(key)
    }
}