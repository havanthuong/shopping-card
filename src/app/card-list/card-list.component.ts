import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { findIndex } from 'rxjs';
import { Product } from '../product.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  @Input() prod = new Array<Product>;

  @Output() onRemoveProduct= new EventEmitter;
  constructor() {}

  ngOnInit(): void {}
  removeProduct(productId: number): void {
    this.onRemoveProduct.emit(productId);
  }
  updateQuantity(element: any): void {
    //validation 1<=validation<=99
  }

}
