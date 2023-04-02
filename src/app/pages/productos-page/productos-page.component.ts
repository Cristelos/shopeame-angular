import { DatosService } from './../../shared/services/datos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productos-page',
  templateUrl: './productos-page.component.html',
  styleUrls: ['./productos-page.component.scss']
})
export class ProductosPageComponent {

  text!: string;

  constructor(private datosService: DatosService){
    this.text = this.datosService.text
  }

}
