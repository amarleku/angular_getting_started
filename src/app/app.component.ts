import { Component } from '@angular/core';
import { FoodService } from './components/food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FoodService],
})
export class AppComponent {
  title = 'app';
}
