import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[];
  displayedColumns: string[] = ['productName', 'productType', 'price', 'actions'];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getAllProducts();
  }
  
  public getAllProducts() {
    this.productService.getProducts();
    this.productService.currentList.subscribe(data => {
      this.products = data;
    })
  }

  public deleteProduct(id: number){
    this.productService.deleteProduct(id).subscribe(() => {
      this.getAllProducts();
    });
  }

  public editProduct(id: number){
    this.productService.getProductById(id);
  }
}
