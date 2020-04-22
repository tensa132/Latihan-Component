import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }
  listJurusan = []
  temp = []
  ngOnInit() {
    let jur = this.route.snapshot.paramMap.get('namaJurusan');
    let jelas = this.route.snapshot.paramMap.get('penjelasanJurusan');
    this.temp=[jur, jelas];
    this.listJurusan.push(this.temp);
  }

}