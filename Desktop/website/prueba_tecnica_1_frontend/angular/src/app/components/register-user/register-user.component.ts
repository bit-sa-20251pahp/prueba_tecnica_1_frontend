import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user.service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  imports: [FormsModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {

  username : string = '';
  password : string = '';

  constructor(private userService: UserServiceService){}

  register(): void{
    this.userService.createUser({username:this.username, password:this.password}).subscribe({
      next:(response) =>{
        console.log(response);
        this.username = '';
        this.password = '';
      },
      error:(response) =>{
        alert('A')
      }
    })
  }
}