import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [
    {name: 'Syrenka', price: 1000, promoted: false},
    {name: 'Mercedes', price: 3333, promoted: true},
    {name: 'Ferrari', price: 6789, promoted: false}
  ];
}

interface Product {
  name: string;
  price: number;
  promoted: boolean;

}
