import { Component, OnInit } from '@angular/core';
import {Food} from '../food';
import {FoodService} from '../food.service';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit {

  errorMessage:string;
 
  selectedExtra:Food;
  extras:Food[]=[];

  constructor(private _foodService:FoodService) { }

  ngOnInit():void {
    this._foodService.getFood()
    .subscribe(data=>{
      // debugger;
      let res= data as any;
      this.extras=res.EXTRAS;
    },
      error=>this.errorMessage=<any>error
    );
  }

  onSelect(extras:Food) :void{
    this.selectedExtra=extras;
  }

}
