import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [
    {name: 'Syrenka', price: 1000, isPromoted: false},
    {name: 'Mercedes', price: 3333, isPromoted: true},
    {name: 'Ferrari', price: 6789, isPromoted: false}
  ];

  promoted = this.products.filter(
    x => x.isPromoted
  );
}



interface Product {
  name: string;
  price: number;
  isPromoted: boolean;

}
