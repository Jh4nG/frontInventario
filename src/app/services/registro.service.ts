import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  public url: String;
  constructor(private http:HttpClient) { 
    this.url = environment.urlEndpoint;
  }

              //objeto que observa la fuente de datos de la que se alimenta, si hay un cambio la fuente se actualiza 
  registro(idusuario,usuario,nomusuario,contrasena,rol,cliente):Observable<any>{
    
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    let datosApi = {
      
      "idUsuario":idusuario,
      "usuario": usuario,
      "nomUsuario": nomusuario,
      "contrasena": contrasena,
      "rol": rol,
      "id_cliente": cliente,
        
    };

    const datos = JSON.stringify(datosApi);

    return this.http.post(this.url + '/usuario', datos ,{ headers} );

    
  }
}
