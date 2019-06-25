import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
    
   private url="http://192.168.1.92:8080/users";
  constructor(private http:HttpClient) { }
  getdatajason() : Observable<any[]>{
 return this.http.get<any[]>(this.url);

  }
  get()
  {
    return [
      {"id":1,"name":"adi","age":30},
      {"id":2,"name":"aadi","age":20},
      {"id":3,"name":"adit","age":21}
    ];
  }
}
