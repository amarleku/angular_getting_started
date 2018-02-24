import { Component, OnInit } from '@angular/core';
import {Food} from '../food';
import{FoodService} from '../food.service';

@Component({
  selector: 'app-sandwiches',
  templateUrl: './sandwiches.component.html',
  styleUrls: ['./sandwiches.component.css'],
})
export class SandwichesComponent implements OnInit {

  errorMessage:String;

  selectedSandwich:Food;
  sandwiches:Food[]=[];

  constructor(private _foodService: FoodService) { }

  ngOnInit():void {
    this._foodService.getFood()
    .subscribe(data=>{
      let res=data as any;
      this.sandwiches=res.SANDWICHES;
    },
      error=>this.errorMessage=<any>error
    );
  }

  onSelect(sandwich:Food) :void{
    this.selectedSandwich=sandwich;
  }

}
