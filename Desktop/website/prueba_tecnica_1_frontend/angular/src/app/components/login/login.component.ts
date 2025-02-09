import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user.service.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  username : string = '';
  password : string = '';

  constructor(private userService: UserServiceService){}

  userLogin(): void{
    this.userService.userLogin({username:this.username, password:this.password}).subscribe({
      next:(response) =>{
        console.log(response);
        this.username = '';
        this.password = '';
      },
      error:(response) =>{
        alert('La contraseña o el username son incorrectos')
      }
    })
  }

}
