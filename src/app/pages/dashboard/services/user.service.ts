import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { User } from '../models/user.model';
import { AddUserRequest } from '../models/create-user.model';
import { Role } from '../models/role.model';
import { Permission } from '../models/permission.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
     
   
  }
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${environment.apiBaseUrl}/api/User`);
  }
  getAllRoles():Observable<Role[]>{
    return this.http.get<Role[]>(`${environment.apiBaseUrl}/api/Role`);
  }
  getAllPermissions():Observable<Permission[]>{
    return this.http.get<Permission[]>(`${environment.apiBaseUrl}/api/Permission`);
    
  }
  deleteUser(id:string):Observable<User>{
    return this.http.delete<User>(`${environment.apiBaseUrl}/api/User/${id}`)
  }
  
  getUserById(id:string): Observable<User>{
    return this.http.get<User>(`${environment.apiBaseUrl}/api/User/${id}`);
  }
  addUser(model:AddUserRequest): Observable<void>{
    return this.http.post<void>(`${environment.apiBaseUrl}/api/User`,model);
  }
 
}
