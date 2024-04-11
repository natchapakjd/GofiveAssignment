import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
     
   
  }
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${environment.apiBaseUrl}/api/User`);
  }
  deleteCategory(id:string):Observable<User>{
    return this.http.delete<User>(`${environment.apiBaseUrl}/api/User/${id}`)
  }
}
