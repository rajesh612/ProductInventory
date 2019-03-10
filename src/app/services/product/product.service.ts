import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  SERVER_URL: string = "http://localhost:8080/api";
  defaultProduct: any = {id: null, productName: '', productType: '', price: ''}
  private listSource = new BehaviorSubject(this.defaultProduct) 
  private productSource = new BehaviorSubject(this.defaultProduct);
  currentProduct = this.productSource.asObservable();
  currentList = this.listSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  public getProducts() {
    this.httpClient.get(`${this.SERVER_URL}/products`).subscribe(data => {
      this.listSource.next(data);
    });
  }

  public getProductById(id: number){
    this.httpClient.get(`${this.SERVER_URL}/products/${id}`).subscribe((data) => {
      this.productSource.next(data)
    })
  }
  public createProduct(product: {id: number, productName: string, productType: string, price: string}){
    this.httpClient.post(`${this.SERVER_URL}/products`, product).subscribe(data => {
      this.getProducts();
    })
  }

  public deleteProduct(id: number){
    return this.httpClient.delete(`${this.SERVER_URL}/products/${id}`);
  }

  public updateProduct(product: {id: number, productName: string, productType: string, price: string}){
    return this.httpClient.put(`${this.SERVER_URL}/products/${product.id}`, product)
  }
}
