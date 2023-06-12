import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './homepage/create/create.component';

import { HomepageComponent } from './homepage/homepage.component';
import { ViewComponent } from './homepage/view/view.component';



const routes: Routes = [
  {
    path:'home', component:HomepageComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },{
    path:'home/create',
    component:CreateComponent
  },{
    path:'home/view/:id',
    component:ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[CreateComponent,ViewComponent]