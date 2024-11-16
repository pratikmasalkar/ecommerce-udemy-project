import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/api/products";

  constructor(private _http: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this._http.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    )
  }

}
interface GetResponse {
  _embedded: {
    products: Product[]
  }
}

