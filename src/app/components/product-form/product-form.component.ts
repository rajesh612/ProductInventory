import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service'


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  id: number = null;
  productName: string = '';
  productType: string = '';
  price: string = '';
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.currentProduct.subscribe(data => {
      this.id = data.id;
      this.productName = data.productName;
      this.productType = data.productType;
      this.price = data.price;
    })
  }
  reset() {
    this.id = null;
    this.productName = '';
    this.productType = '';
    this.price = '';
  }
  submitProduct() {
    let product = { id: this.id,
                    productName: this.productName,
                    productType: this.productType,
                    price: this.price
                  }
    this.productService.createProduct(product);
    this.reset();
  }

}
