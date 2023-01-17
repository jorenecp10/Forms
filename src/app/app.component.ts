import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '061 formIntro';

 codigo:any;
nombre:string="";
edad:any;
opcion:any;
//  sexo:any;
//  comentarios:any;
//  activar:any;


 mostrarVar( ){

  console.log("codigo (" + this.codigo +")");

 }
}
