import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './routes/about/about.component';
import { HomeComponent } from './routes/home/home.component';
import { UserComponent } from './routes/user/user.component';

const routes: Routes = [
  {
    component:AboutComponent,
    path:'about'
  },
  {
    component:UserComponent,
    path:'user'
  },
  {
    component:HomeComponent,
    path:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
