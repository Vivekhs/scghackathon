import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { AppState } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private store: Store<AppState>, private router: Router) {

    }

    ngOnInit() {

    }
}
