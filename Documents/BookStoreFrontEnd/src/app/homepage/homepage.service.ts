import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookdetails } from './bookdetails';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {


  constructor(private http:HttpClient) { }

  get()
  {
    return this.http.get<Bookdetails[]>("http://localhost:8080/books/getAll");
  }

  add(payload:Bookdetails){
    return this.http.post<Bookdetails>("http://localhost:8080/books/add",payload);
  }

  delete(id:number){
    return this.http.delete<Bookdetails>(`http://localhost:8080/books/delete/${id}`);
  }
  getById(id:number){
    return this.http.get<Bookdetails>(`http://localhost:8080/books/getById/${id}`);
  }
}
