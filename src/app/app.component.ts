import { Component } from '@angular/core';
import { ACTIONS, IFood, MyAppState,Action } from './store/app.reducer';
import {  Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { PRODUCTS } from "./../store/market";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'coursia';

  foods$: Observable<Array<IFood>>;
  
  fs?:any;
  constructor(private store: Store<MyAppState>) {
   this.foods$ =  this.store.select('foods')
   
   }

  ngOnInit() { 
    this.foods$.subscribe()
  }

  getFood() {
    this.foods$.subscribe(val=>console.log(val))
  }
  addFood() {
    let addAction:Action = {
      type: ACTIONS.ADD_FOOD,
      payload: Object.assign({name:"prakhar"})
    }
    this.store.dispatch(addAction)
  }

}
