import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user.service.service';
import { FormsModule } from '@angular/forms';
import { RouterEvent, RouterLink } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({

  selector: 'app-edit-user',
  imports: [FormsModule, AppComponent],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {

  username : string = '';
  password : string = '';

  constructor(private userService: UserServiceService){}

  editUser(): void{
    this.userService.editUser({username:this.username, password:this.password}).subscribe({
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
