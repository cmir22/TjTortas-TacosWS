import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tacos',
  templateUrl: './tacos.component.html',
  styleUrls: ['./tacos.component.scss']
})
export class TacosComponent implements OnInit {

  @Input() products: any[];
  @Output() productAdded = new EventEmitter();
  addProductToCart(product) {
    this.productAdded.emit(product);
  }

  constructor() { }

  ngOnInit(): void {

  }

}
