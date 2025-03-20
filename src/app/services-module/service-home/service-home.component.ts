import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service-home',
  imports: [CommonModule],
  templateUrl: './service-home.component.html',
  styleUrl: './service-home.component.css'
})
export class ServiceHomeComponent {

  silderimg=[
    { url: 'https://kyssafarms.com/cdn/shop/files/Kyssa_banners-03_1728x.png?v=1679559632'
    },
    {url:    'https://kyssafarms.com/cdn/shop/files/Kyssa_banners-01_1728x.png?v=1679559776'
    },
    {url:  'https://kyssafarms.com/cdn/shop/files/Grown_Organically_1728x.png?v=1677151326'
    }
]


image="https://agrimart-eta.vercel.app/fruits";



}
