import { Component, OnInit } from '@angular/core';
import {Food} from '../food';
import { FoodService } from '../food.service';



@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.css']
})
export class BurgersComponent implements OnInit {
  searchTerm: any;

  errorMessage:string;


  selectedBurger:Food;
  burgers:Food[]=[];

  constructor(private _foodService: FoodService) { }

  ngOnInit():void {
    this._foodService.getFood()
    .subscribe(data=>{
      let res = data as any;
      this.burgers= res.BURGERS;
    },
      error=>this.errorMessage=<any>error
    );
  }

 
  onSelect(burgers:Food):void{
    this.selectedBurger=burgers;
  }
  
  
  // burger=this.burgers;
  search(): void {
    let term = this.searchTerm;
    this.burgers = this.burgers.filter(function(tag) {
        return tag.name.indexOf(term) >= 0;
    }); 
}

}
