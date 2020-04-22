import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private route : ActivatedRoute, private routePass : Router) { }
  nama : String; penjelasan : String;

  ngOnInit() {
    
  }
  submit() {
    this.routePass.navigate(['/list-page/'+this.nama+'/'+this.penjelasan])
  }
  // Homepass() {
  //   this.router.navigate(['/home', 3]);
  // }
}