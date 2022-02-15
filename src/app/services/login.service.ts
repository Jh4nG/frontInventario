import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url: String;
  constructor(private http:HttpClient) {
    this.url = environment.urlEndpoint;
   }

                 //objeto que observa la fuente de datos de la que se alimenta, si hay un cambio la fuente se actualiza 
  login(usuario,contrasena):Observable<any>{
    
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    let datosApi = {
      
        "idUsuario":"",
        "usuario": usuario,
        "nomUsuario": "",
        "contrasena": contrasena,
        "rolUsuario": "",
        "cliente": "",

        
    };

    const datos = JSON.stringify(datosApi);

    return this.http.post(this.url + '/usuario/login/', datos ,{ headers} );

    
  }
}


