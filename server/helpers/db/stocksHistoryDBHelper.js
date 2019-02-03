const stockHistoryModel = require('../../models/stocksHistoryModel');

module.exports = {
    findStocksHistory : (search, filter, limit)=>{
        return stockHistoryModel.find(search, filter).limit(limit);
    },

    findDistinctRecords: (key) =>{
        return stockHistoryModel.distinct(key)
    },

    findTopPerformers: (performersCount)=>{

        return stockHistoryModel.aggregate([
            {
                $project:{
                    // this conversion to double is not required if
                    // while inserting the records we use number instead of string for volume
                    volume:{ $convert: { input: '$volume', to: "double" } },
                    company:'$company'
                }
            },
             {
                $group:{
                    _id: '$company',
                    count: {'$sum':1},
                    // this will calculate total volume for the company till date
                    total: {$sum:{$add: ['$volume']}}
                }
            },
            {
                $sort:{
                    total:-1
                }
            },
            { $limit : performersCount},
            {
                $project: {
                    _id: 0,
                    company: '$_id'
                }
            }
            ]);

    }

}