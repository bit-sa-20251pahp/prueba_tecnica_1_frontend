import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user.service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-buscar-user',
  imports: [FormsModule, CommonModule, AppComponent],
  templateUrl: './buscar-user.component.html',
  styleUrl: './buscar-user.component.css'
})

export class BuscarUserComponent {

  username : string = '';
  user: any = {username:"", password:""};

  constructor(private userService: UserServiceService) {}

  findUser(): void{
    console.log(this.username)
    this.userService.findUser(this.username).subscribe({
      next:(response) =>{
        console.log(response);
        this.user.password = response.contraseña
        this.user.username = response.usuario
      },
      error:(response) =>{
        console.log(response)
        alert('No se encontró el usuario')
      }
    })
  }
}
