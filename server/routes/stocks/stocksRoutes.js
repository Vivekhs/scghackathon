var express = require('express');
var stocksRouter = express.Router();
const stocksHistoryController = require('../../controller/stocks/stocksController');


// we can put a middleware here in case some auth or request validation has to be done

/**
 * @author Vivek Sinha
 * firstRecordId { pass this to fetch previous records, this id will
 * come from the first record of previously fetched records}
 * lastRecordId { pass this to fetch next records, this id will
 * come from the last record of previously fetched records}
 * records { number of records to be fetched after lastRecordId or before
 * firstRecordId }
 * company { pass company name to get only records releated to this company }
 */
stocksRouter.get('/:firstRecordId/:lastRecordId/:records', stocksHistoryController.findStocks);

/**
 * @author Vivek Sinhs
 * will return
 */
stocksRouter.get('/companies', stocksHistoryController.findAllCompanies);

module.exports = stocksRouter;
