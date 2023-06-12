import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookdetails } from '../bookdetails';
import { HomepageService } from '../homepage.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  constructor(private homeservice:HomepageService,private route:ActivatedRoute){}
  book:any;

  ngOnInit() {
    this.route.paramMap.subscribe(
      (data)=>{
        var id=Number(data.get('id'));
        this.view(id);
      }
    );
  }

  view(id:number){
    this.homeservice.getById(id)
   .subscribe((data: any) =>{
     this.book=data;     
   })
  }
}
