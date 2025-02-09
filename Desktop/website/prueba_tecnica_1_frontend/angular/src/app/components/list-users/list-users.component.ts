import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserServiceService } from '../../services/user.service.service';

@Component({
  selector: 'app-list-users',
  imports: [CommonModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit{

  /**
   *
   */
  users : any[] = [];

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
      this.userService.getAllUsers().subscribe(
        (response)=>{
        this.users = response.users; 
   })
 }
}