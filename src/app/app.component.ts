import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'IPHONE 14',
      description: 'Description for product item number 1',
      thumbnail:
        'https://genk.mediacdn.vn/139269124445442048/2022/3/19/apple-iphone-14-pro-16476306930821172748492-1647661216618-1647661217164715438082.jpeg',
      price: 3000,
      quantity: 2,
    },
    {
      id: 2,
      name: 'SAMSUNG ULTRA S21',
      description: 'Description for product item number 2',
      thumbnail:
        'https://ntstore.com.vn/wp-content/uploads/2022/04/S21-ULTRA.jpeg',
      price: 2000,
      quantity: 2,
    },
    {
      id: 3,
      name: 'SAMSUNG ULTRA S21',
      description: 'Description for product item number 2',
      thumbnail:
        'https://ntstore.com.vn/wp-content/uploads/2022/04/S21-ULTRA.jpeg',
      price: 2000,
      quantity: 2,
    },
  ];

  title = 'shopping-card';
  numberItems: number = 6;
  subTotal = 500;

  removeProduct(productId: number): void {
    const index = this.products.findIndex(
      (product) => product.id === productId
    );
    if (index != -1) this.products.splice(index, 1);
  }
}
