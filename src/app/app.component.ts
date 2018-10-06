import { Component } from '@angular/core';
import {Product} from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [
    {name: 'Syrenka', price: 1000, isPromoted: false, tags: ['nieprodukowany']},
    {name: 'Mercedes', price: 3333, isPromoted: true, tags: ['promocja', 'super']},
    {name: 'Ferrari', price: 6789, isPromoted: false}
  ];

  promoted = this.products.filter(
    x => x.isPromoted
  );
}
