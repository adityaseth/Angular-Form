import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor(private applicationservice :ApplicationService) { }
  public arrr=[];
  ngOnInit() {
    this.applicationservice.getdatajason()
    .subscribe(data=>this.arrr=data)
  }

}
