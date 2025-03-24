import { Component } from '@angular/core';
import { Registration } from '../registration';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegistrationserviceService } from '../registrationservice.service';

@Component({
  selector: 'app-registration',
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

//Cretae a Object of class RegistrationserviceService
  constructor(private service:RegistrationserviceService) { }

//  Create a Object of class File 
  regi = new Registration();
  public SaveRegi(r2: Registration)
  {
    this.service.SaveRegistration(r2).subscribe();
    window.location.reload();
  }

  
}
