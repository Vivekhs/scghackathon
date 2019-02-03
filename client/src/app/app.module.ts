import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from "@ngrx/router-store";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { metaReducers, reducers } from './reducers';
import { CustomSerializer } from './shared/utils';
import { StocksModule } from './modules/stocks/stocks.module';

const routes: Routes = [
    {
        path: '',
        loadChildren: './modules/stocks/stocks.module#StocksModule',
        // canActivate: [AuthGuard],
    },
    {
        path: "**",
        redirectTo: '/'
    }
];


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot({stateKey: 'router'})
    ],
    providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],

    bootstrap: [AppComponent]
})
export class AppModule {
}
