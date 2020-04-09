import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../../servicios/upload.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-nuevasfotos',
  templateUrl: './nuevasfotos.component.html',
  styleUrls: ['./nuevasfotos.component.css']
})
export class NuevasfotosComponent implements OnInit {

  trueimg:Boolean = false;
  loader:Boolean = false;
  myimg:string;
  final:Boolean = true; 
  msn:string;
  showPreview = false;
  loadNextFoto = true;
  fotos: any;
  urls = new Array<string>();
  imagenSubida = false;
  index: number = 0;
  porcentajeCarga: number = 0;
  totalArchivos: number = 0;
  
  constructor(private subir:UploadService) { }

  ngOnInit() {
    this.msn = "Subir una imagen no mayor de 10MB";
  }


  subiendoando(event: any){


    /********* leyendo fotos para preview  ********/
    // this.urls = [];
    // let filesPreview = event.target.files;
    // if (filesPreview) {
    //   for (let file of filesPreview) {
    //     let reader = new FileReader();
    //     reader.onload = (e: any) => {
    //       this.urls.push(e.target.result);
    //     }
    //     reader.readAsDataURL(file);
    //   }
    // }
    /********* leyendo fotos para preview  ********/

    let img:any = event.target;

    console.log(event);

    this.totalArchivos = img.files.length;

    if(this.totalArchivos > 0){

      this.loader = true;
      let form = new FormData();

      this.fotos = img.files
      this.showPreview = true;

      console.log(this.fotos);

      /******************** Continue *************/
      
      for ( const imagen of this.fotos) {

        imagen.estaSubiendo = true;

        if( this.imagenSubida ){
          continue;
        }

        form.append('file',imagen);
        this.subir.subirImagen(form).subscribe(
  
          resp => {
           
            this.loader = false;

            if(resp.status){
              console.log("El archivo a subido correctamente");
              imagen.estaSubiendo = false;
              this.imagenSubida = true;
              
              this.fotos[this.index].listo="Foto Cargada";
              this.porcentajeCarga = ((this.index + 1)/this.totalArchivos)*100; 
              console.log(this.index + 1);
              console.log(this.totalArchivos);
              console.log(this.porcentajeCarga + '%');
            }else{
              console.log("ha ocurrido un error en el servidor");
              this.fotos[this.index].listo="Error al subir el archivo";
            }

            this.index++;

            console.log(resp);
  
          },
          error => {
            this.loader = false;
            console.log("La imagen es muy grande");
            
          }
        );

      }
      /******************** forkjoin *************/

      // const observablesList = []; 

      // for (let i = 0; i < this.fotos.length; i++) {

      //   form.append('file',img.files[i]);

      //   observablesList.push(this.subir.subirImagen(form));

      // }

      // forkJoin(observablesList).subscribe((response) => {
      //   console.log(response);
      // });

      /******************** forkjoin *************/


      // for(let i=0; i<img.files.length; i++){

      //   form.append('file',img.files[i]);

      //   this.subir.subirImagen(form).subscribe(
  
      //     resp => {
           
      //       this.loader = false;

      //       if(resp.status){

      //         this.trueimg = true;
      //         this.fotos[i].ver = true;
      //         this.fotos[i].img = environment.urlBase + '/uploads/' + resp.generatedName;
      //         this.myimg = environment.urlBase + '/uploads/' + resp.generatedName;
      //         this.msn = "Archivo subido";
      //         console.log(this.fotos[i].ver);

      //       }else{
              
      //         console.log("ha ocurrido un error en el servidor");
              
      //       }

      //       console.log(resp);
  
      //     },
      //     error => {
      //       this.loader = false;
      //       alert('Imagen supera el tamaño permitido');
            
      //     }
      //   );

      // }

    }else{
      this.showPreview = false;
    }
  }

}
