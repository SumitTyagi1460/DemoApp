import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from './Shared/user-details.service';
import { Userdetail } from './Shared/userdetail.model';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [Userdetail]
})


export class UserDetailsComponent implements OnInit {
 
  public UserInfo : Userdetail; 
  name: string;
  constructor(private UserDetailServ : UserDetailsService) {
    this.UserInfo = new Userdetail();
    
   }

  ngOnInit() {}
  InsertUserDetails(){
  //Code to input here
    this.UserDetailServ.InsertUserDetails(this.UserInfo);
   }

  }

