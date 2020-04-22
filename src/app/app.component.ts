import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  namaJurusan : String[]; penjelasanJurusan : String[];
  
  constructor (private router : Router) {}
  InputPage() {
    this.router.navigate(['/input']);
  }
  ListPage() {
    this.router.navigate(['/list-page']);
  }
  EditPage() {
    this.router.navigate(['/edit-page']);
  }
}
