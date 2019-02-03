import { Component, OnInit } from '@angular/core';
import { StocksService } from '../../services/stocks.service';
import { StockFetch } from '../../model/stock-fetch.model';
import { Stock } from '../../model/stock.model';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  styleUrls: ['./stocks-list.component.scss']
})
export class StocksListComponent implements OnInit {

  stocksList: Stock[];
  page = 1;
  pageOffset = 0;
  itemsPerPage = 10;
  maxSize = 3;
  collectionSize = (this.maxSize + 1) * (this.pageOffset + this.itemsPerPage);
  stockFetchReqData: StockFetch;
  topPerformersList: Stock[];
  topPerformingCompany: string;
  constructor(private stocksService: StocksService,
    private sharedService: SharedService) {
    this.stockFetchReqData = {
      firstRecordId: 0,
      lastRecordId: 0,
      records: this.itemsPerPage * this.maxSize
    };

    this.stocksService.findStocks(this.stockFetchReqData)
    .subscribe(res => {
      this.stocksList = res;
    });
    this.stocksService.findTopPerformers().subscribe(topPerformers => {
      this.topPerformersList = topPerformers;
      this.topPerformingCompany = topPerformers[0].company;
    });
  }
  ngOnInit() {
  }

  pageChanged(page) {
    if (page > (this.maxSize * (this.pageOffset + 1))) {
      this.sharedService.showSpinner();
        this.stockFetchReqData.firstRecordId = 0;
        this.stockFetchReqData.lastRecordId = this.stocksList[this.stocksList.length - 1]._id;
        this.stocksService.findStocks(this.stockFetchReqData)
          .subscribe(stocksList => {
            this.stocksList = stocksList;
            this.sharedService.hideSpinner();
            this.pageOffset += 1;
            this.updateCollectionSize();
            this.page = page;
          });
    } else if (page === (this.maxSize * (this.pageOffset))) {
      this.stockFetchReqData.firstRecordId = this.stocksList[0]._id;
      this.stockFetchReqData.lastRecordId = 0;
      this.stocksService.findStocks(this.stockFetchReqData)
        .subscribe(stocksList => {
          this.stocksList = stocksList;
          this.sharedService.hideSpinner();
          this.pageOffset -= 1;
          this.updateCollectionSize();
          this.page = page;
        });
    } else {
      this.page = page;
    }
  }

  updateCollectionSize() {
    this.collectionSize = this.itemsPerPage * (this.maxSize * (this.pageOffset + 1) + 1);
  }

  searchByCompany(company) {
    if (this.stockFetchReqData.company === company) {
      return;
    }
    this.sharedService.showSpinner();
    this.stockFetchReqData.company = company;
    this.reset();
    this.stocksService.findStocks(this.stockFetchReqData)
    .subscribe(res => {
      this.stocksList = res;
      this.sharedService.hideSpinner();
    });

  }

  reset() {
    this.collectionSize = (this.maxSize + 1) * (this.pageOffset + this.itemsPerPage);
    this.pageOffset = 0;
    this.page = 1;
  }



}

