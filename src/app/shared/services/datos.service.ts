import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  text: string = "hola soy un dato compartido"

  constructor() { }

  setText(newValue:string){
    this.text = newValue;
  }
  getText(){
    return this.text
  }

}
