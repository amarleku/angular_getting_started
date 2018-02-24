import { Component, OnInit } from '@angular/core';
import {Food} from '../food';
import {FoodService} from '../food.service';

@Component({
  selector: 'app-fajita',
  templateUrl: './fajita.component.html',
  styleUrls: ['./fajita.component.css']
})
export class FajitaComponent implements OnInit {

  errorMessage:string;

  selectedFajita:Food;
  fajitas:Food[]=[];

  constructor(private _foodService:FoodService) { }

  ngOnInit() {
    this._foodService.getFood()
    .subscribe(data=>{
      let res=data as any;
      this.fajitas=res.FAJITAS;
    },

      error=>this.errorMessage=<any>error
    );


  }

  onSelect(fajitas:Food) :void{
    this.selectedFajita=fajitas;
  }

}
