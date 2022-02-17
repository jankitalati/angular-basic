import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    UserComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AboutComponent,
    UserComponent,
    HomeComponent
  ]
})
export class RoutesModule { }
