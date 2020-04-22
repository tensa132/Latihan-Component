import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputComponent } from './input/input.component';
import { ListPageComponent } from './list-page/list-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';

import { Routes, RouterModule } from '@angular/router';
const ROUTES: Routes=[
  {path:'input', component: InputComponent},
  {path:'list-page', component: ListPageComponent},
  {path:'list-page/:namaJurusan/:penjelasanJurusan', component: ListPageComponent},
  {path:'edit-page', component: EditPageComponent}
] 

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent, InputComponent, ListPageComponent, EditPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
