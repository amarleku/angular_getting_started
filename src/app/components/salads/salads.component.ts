import { Component, OnInit } from '@angular/core';
import {Food} from '../food';
import {FoodService} from '../food.service';

@Component({
  selector: 'app-salads',
  templateUrl: './salads.component.html',
  styleUrls: ['./salads.component.css']
})
export class SaladsComponent implements OnInit {

  errorMessage:string;

  selectedSalad:Food;
  salads:Food[]=[];

  constructor(private _foodService:FoodService) { }

  ngOnInit():void {
    this._foodService.getFood()
    .subscribe(data=>{
      let res = data as any;
       this.salads= res.SALADS;
    },
      error=>this.errorMessage=<any>error
    );
  }

  onSelect(salad:Food) :void{
    this.selectedSalad=salad;
  }

}
