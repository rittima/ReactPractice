import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageService } from './homepage.service';

declare var window:any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  
  constructor(private homeservice:HomepageService,private router:Router){}
  bookdetails:any;

  searchText: string | undefined;
  deleteModal:any;
  idToDelete: any ="";
  ngOnInit(): void {
    this.get();
  }

 get(){
   this.homeservice.get()
   .subscribe((data: any) =>{
     this.bookdetails=data;     
   })
   
 }

 openDeleteModal(Id : any){
  this.homeservice.delete(Id).subscribe({
  next:(data: any) =>{
    this.router.navigate(["home"])
  },
  error:(error: any) => console.log(error)
    
  });
    
  }
}
