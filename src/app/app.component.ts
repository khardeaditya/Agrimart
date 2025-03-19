import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pvp';

  cards=[
    {
      url:'https://img.freepik.com/free-photo/world-food-day-celebration-with-world-ball-globe-surrounded-by-food_23-2151794082.jpg?t=st=1726140145~exp=1726143745~hmac=68ebe4d1acf4aef91a10f0f0a76720f329a884805b2cec100fd05e350e2324ac&w=1060',
      heading:'Why Organic Matters',
      desc:'Choosing organic means choosing health. Our organic farming practices not only help protect the environment, but they also ensure that the food you eat is clean, safe, and nutrient-rich. We are committed to delivering produce that supports a healthier lifestyle, while also preserving the health of our planet.'
    },
    {
      url:'https://img.freepik.com/free-photo/smart-agriculture-iot-with-hand-planting-tree-background_53876-124626.jpg?t=st=1725964942~exp=1725968542~hmac=fe826b7916c38510a08d0c3ca9f0fc1a4bd10a26a01070f86c5399f029b43058&w=1060',
      heading:'Sustainable Farming',
      desc:'By farming sustainably, we protect the soil, conserve water, and promote biodiversity on our land. This helps keep the environment healthy for future generations.We use techniques like crop rotation and natural pest control, which reduces the need for chemicals and preserves the ecosystem.'
    },
    {
      url:'https://upload.wikimedia.org/wikipedia/commons/4/41/India_Farming.jpg',
      heading:'Our Mission',
      desc:'At PureHarvest, we believe in the power of organic food to nourish the body and the earth. Our mission is to provide families with the freshest, highest-quality organic produce grown with love and care.'
  }, {
    url:'https://img.freepik.com/free-photo/people-holding-board-about-healthy-nutrition-veggie_53876-122976.jpg?t=st=1725970840~exp=1725974440~hmac=2d6a297a245c9b26ca027a00a02402bf933ba207fd9d3c76d3bc2a6d7a82c3ae&w=826',
    heading:'100% Pesticide-Free',
    desc:'To maintain our pesticide-free promise, we use methods such as crop rotation, natural insect predators, and carefully selected companion plants that deter pests without the need for synthetic chemicals. We believe in working with nature, not against it.'
  },{

    url:'https://img.freepik.com/free-photo/delicious-healthy-gmo-free-fruit-hands_23-2148536519.jpg?t=st=1725964869~exp=1725968469~hmac=ff09073ef805bef9313b384d742e01045b8da40300da0e70632a82a38027243a&w=996',
    heading:'Non-GMO Products',
    desc:'Our products are 100% Non-GMO, meaning they have not been genetically altered in a lab. You’re getting food the way nature intended.We believe in keeping food as natural as possible, so none of our products contain genetically modified ingredients'
  },
  {
    url:'https://img.freepik.com/free-photo/local-grown-vegetables-basket_23-2149128089.jpg?t=st=1726140394~exp=1726143994~hmac=dd40b9aabaea8eeded2e9d5ed4cb0a88b96acd3c9d68311100dd35e647f0890a&w=996',
    heading:'Farm-Fresh to You',
    desc:'To maintain our pesticide-free promise, we use methods such as crop rotation, natural insect predators, and carefully selected companion plants that deter pests without the need for synthetic chemicals. We believe in working with nature, not against it.'
  }
];

}
