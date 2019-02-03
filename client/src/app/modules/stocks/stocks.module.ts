import { NgModule } from "@angular/core";
import { StocksListComponent } from './components/stocks-list/stocks-list.component';
import { StocksService } from './services/stocks.service';
import { RouterModule } from '@angular/router';
import { stocksRoutes } from './stocks.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    declarations: [StocksListComponent],
    imports: [
        RouterModule.forChild(stocksRoutes),
        SharedModule,
        NgbModule
    ],
    exports: [],
    providers: [StocksService]
})
export class StocksModule {

}
