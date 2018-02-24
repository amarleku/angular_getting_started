import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import {HttpClientModule } from '@angular/common/http';
import{SearchPipe} from'./components/searchPipe';

import { AppComponent } from './app.component';
import { BurgersComponent } from './components/burgers/burgers.component';
import { SandwichesComponent } from './components/sandwiches/sandwiches.component';
import { SaladsComponent } from './components/salads/salads.component';
import { FajitaComponent } from './components/fajita/fajita.component';
import { ExtrasComponent } from './components/extras/extras.component';

import { AppRoutingModule } from './app-routing.module';

import { BurgerDetailsComponent } from './components/burgers/burger-details/burger-details.component';
import { ExtrasDetailsComponent } from './components/extras/extras-details/extras-details.component';
import { FajitaDetailsComponent } from './components/fajita/fajita-details/fajita-details.component';
import { SaladDetailsComponent } from './components/salads/salad-details/salad-details.component';
import { SandwichDetailsComponent } from './components/sandwiches/sandwich-details/sandwich-details.component';



const appRoutes : Routes=[
  // {path:'',component:AppComponent},

  {path:'burgers/:id', component:BurgerDetailsComponent},
  { path:'burgers',  component:BurgersComponent},
 
  {path:'sandwiches/:id', component:SandwichDetailsComponent},
  {path:'sandwiches', component:SandwichesComponent},

  {path:'salads/:id', component:SaladDetailsComponent},
  {path:'salads', component:SaladsComponent},

  {path:'fajita/:id', component:FajitaDetailsComponent},
  {path:'fajita', component:FajitaComponent},

  {path:'extras/:id', component:ExtrasDetailsComponent},
  {path:'extras', component:ExtrasComponent},
  

];



@NgModule({
  declarations: [
    AppComponent,
    BurgersComponent,
    SandwichesComponent,
    SaladsComponent,
    FajitaComponent,
    ExtrasComponent,
    BurgerDetailsComponent,
    ExtrasDetailsComponent,
    FajitaDetailsComponent,
    SaladDetailsComponent,
    SandwichDetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) ,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
