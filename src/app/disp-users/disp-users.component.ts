import { Component, OnInit } from '@angular/core';
import { RegistrationserviceService } from '../registrationservice.service';
import { Registration } from '../registration';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-disp-users',
  imports: [CommonModule],
  templateUrl: './disp-users.component.html',
  styleUrl: './disp-users.component.css'
})
export class DispUsersComponent implements OnInit {
     
  ngOnInit(): void {
    this.GetAllData();
  }

  constructor(private service:RegistrationserviceService) { }

  users:Registration[]=[];

  public GetAllData()
  {
    this.service.GetAllData().subscribe( (data) => this.users=data);
  }


}
