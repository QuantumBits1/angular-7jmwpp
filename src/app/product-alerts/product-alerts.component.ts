import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

//export ProductAlertsComponent class
@Component({
  selector: 'app-product-alerts', //identify the component
  templateUrl: './product-alerts.component.html', //reference the component's HTML
  styleUrls: ['./product-alerts.component.css'], //reference the component's CSS
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
