import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserDetailsComponent} from './user-details/user-details.component';

const routes: Routes = [
  { path: "userdetails", component: UserDetailsComponent },
  { path: '**', redirectTo: '/userdetails', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
