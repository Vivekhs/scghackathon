import { Routes } from "@angular/router";
import { StocksListComponent } from './components/stocks-list/stocks-list.component';

export const stocksRoutes: Routes = [
    {
        path: '',
        component: StocksListComponent
    }
];