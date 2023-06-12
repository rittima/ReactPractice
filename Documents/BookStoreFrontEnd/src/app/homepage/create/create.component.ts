import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { HomepageService } from '../homepage.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private homeservice:HomepageService,private router:Router){}
  book={
    id:0,
    bookname: '',
    author: '',
    details:''
  };

  create(){
    this.homeservice.add(this.book)
    .subscribe({
      next:(data:any)=>{
        this.router.navigate(["home"]);
      },
      error:(error:any)=>console.log(error)
    });
  }
}
