import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '061 formIntro';

 codigo:number=0;
nombre:string="";
edad:number=0;
opcion:any;
sexo:string="hombre";
comentarios:string="";
activar:boolean=true;


 mostrarVar( ){

  console.log("codigo (" + this.codigo +")" + "nombre:" + this.nombre + " edad:" +this.edad + "Opcion:" + this.opcion + "comentarios:"+this.comentarios + "sexo:"+ this.sexo + "Activar:" + this.activar);

 }

   onSubmit(){
    console.log("hola")
   }

}
