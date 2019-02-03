import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../model/stock.model';
import { HttpClient } from '@angular/common/http';
import { StockFetch } from '../model/stock-fetch.model';

@Injectable()
export class StocksService {

  constructor(private http: HttpClient) { }

  findStocks(reqData: StockFetch): Observable<Stock[]> {
    return this.http.get<Stock[]>
    (`/api/stocks/${reqData.firstRecordId}/${reqData.lastRecordId}/${reqData.records}?company=${reqData.company}`);
}
}
