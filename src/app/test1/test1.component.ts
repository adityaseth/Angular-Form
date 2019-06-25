import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import { FormsModule,NgForm} from '@angular/forms';
import { Data } from '../data';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  private _id:number;
  private _name='';
  private _email='';
  private _address1='';
  private _address2='';
  private _city='';
  private _pincode:number;
  private _state='';
  constructor(private http : HttpClient){}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  ngOnInit(): void {
    
  }
  callApi(){
    let post_body={
      "id": this._id  ,
        "name": this._name  ,
        "email": this._email  ,
        "address": [
            {
                "id": this._id  ,
                "address1": this._address1  ,
                "address2": this._address2  ,
                "city": this._city  ,
                "pinCode": this._pincode  ,
                "state": this._state  
            }
        ]
    }
    
    this.http.post('http://192.168.1.93:8080/add/',post_body,this.httpOptions)
    .subscribe(
      (val) => {
          console.log("POST call successful value returned in body", 
                      val);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
});
    console.log(post_body);
  }
}

 