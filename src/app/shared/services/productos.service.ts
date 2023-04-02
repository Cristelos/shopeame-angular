import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProductos(){
     return this.http.get("http://localhost:3000/products");
  }
//   postProductos(){
//     return this.http.post();
//  }
//   pulProductos(){
//     return this.http.pul();
//   }
//   deleteProductos(){
//   return this.http.delete();
//   }

}
