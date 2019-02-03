const stocksHistoryDBHelper = require('../../helpers/db/stocksHistoryDBHelper');
const responseHandler = require('../../helpers/util/responseHandler');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
module.exports = {
    /**
     * @author Vivek Sinha
     * { request type } GET
     * req.params { firstRecordId, lastRecordId, records }
     * firstRecordId { pass this in case of fetching previous records }
     * lastRecordId { pass this in case of fetching next records }
     * records { total records to be fetched }
     */
    findStocks : async (req, res)=>{
        const requestInfo = req.params;
        const firstRecordId = requestInfo.firstRecordId;
        const lastRecordId = requestInfo.lastRecordId;
        const records = parseInt(requestInfo.records);
        const company = req.query['company'];
        // validation is pending
        // In case user is passing a correct _id in first and last record id
        let query = {};
        // here while doing pagination last or first id of
        // previously fetched records will be taken
        // as mongodb skip function has performance issue
        // when there are huge number of records in collection
        if(firstRecordId && firstRecordId != '0'){
            query['_id'] = { $lt : new ObjectId(firstRecordId)};
        }
        if(lastRecordId && lastRecordId != '0'){
            query['_id'] = { $gt : new ObjectId(lastRecordId) };
        }
        
        if(company && company != 'null' && company != 'undefined'){
            query['company'] = company;
        }
        try{
            let stockRecords = await stocksHistoryDBHelper.findStocksHistory(query, {}, records);
            responseHandler.success(req, res, stockRecords);
        }
        catch(error){
            responseHandler.failure(req, res, 500, error);
        }
    },

    /**
     * @author Vivek Sinha
     * this will return company list 
     */
    findAllCompanies: async (req, res) => {
        try{
            let companyList = await stocksHistoryDBHelper.findDistinctRecords('company');
            responseHandler.success(req, res, companyList);
        }
        catch(error){
            responseHandler.failure(req, res, 500, error);
        }
    }
}