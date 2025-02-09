import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiUrl = 'http://localhost:3003/api';

  constructor(private http: HttpClient) { }

  getAllUsers () : Observable<any> {
    return this.http.get(`${this.apiUrl}/get-users`)
  }
   
  createUser(user: any) : Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/create-user`,user);
  }
  userLogin(user: any) : Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/login-user`,user);
  }
  findUser(user:any) : Observable<any> {
    return this.http.get(`${this.apiUrl}/find-user`, user)
  }
  editUser(user:any) : Observable<any> {
    return this.http.put(`${this.apiUrl}/update-user`, user)
  }
  deleteUser(user:any) : Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete-user`, user)
  }
}
