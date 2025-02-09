import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user.service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete',
  imports: [FormsModule, CommonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {

    username : string = '';
    password : string = '';
  
    constructor(private userService: UserServiceService){}
  
    deleteUser(): void{
      this.userService.deleteUser({username:this.username, password:this.password}).subscribe({
        next:(response) =>{
          console.log(response);
          this.username = '';
          this.password = '';
        },
        error:(response) =>{
          console.log(response)
          alert('a')
        }
      })
    }
}
