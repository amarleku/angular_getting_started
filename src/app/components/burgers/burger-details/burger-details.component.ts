import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Food} from'../../food';


@Component({
  selector: 'app-burger-details',
  templateUrl: './burger-details.component.html',
  styleUrls: ['./burger-details.component.css']
})
export class BurgerDetailsComponent implements OnInit {

 
  showImage: boolean = true;

  @Input() burger:Food;


  constructor(private _route:ActivatedRoute) { 
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
}

  ngOnInit() {
    let scope = this;
    this._route.queryParams.subscribe(data=>{

      this.burger = data as any;
    });

  }

}
