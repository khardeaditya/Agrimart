import { Injectable } from '@angular/core';
import { Registration } from './registration';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationserviceService {

  constructor(private h1:HttpClient) { }

  public SaveRegistration(r1: Registration)
  {
   let url="http://localhost:8080/UserRegi/saveRegi";
   return this.h1.post(url,r1);
  }

  public GetAllData()
  {
    let url="http://localhost:8080/UserRegi/getAllData";
    return this.h1.get <Registration[]> (url);
  }
}
