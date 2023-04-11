import { ProductosService } from 'src/app/shared/services/productos.service';
import { DatosService } from './../../shared/services/datos.service';
import { Component } from '@angular/core';
import { ProductI } from 'src/app/shared/models/interfaces';

@Component({
  selector: 'app-productos-page',
  templateUrl: './productos-page.component.html',
  styleUrls: ['./productos-page.component.scss']
})
export class ProductosPageComponent  {
  searchProduct: string = "";
  product!: ProductI[];
  productsAmount!: number;

  constructor(private productosService: ProductosService){
    this.productosService.getProductos().subscribe((res:any) => {
      this.product = res as [];
      this.productsAmount = this.product.length
      // this.product = res.results;
    });
  }

}
