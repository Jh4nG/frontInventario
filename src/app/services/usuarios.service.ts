import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  url: String;

  constructor(public http: HttpClient) { 
    this.url = environment.urlEndpoint;
  }

  getUsuarios():Observable<any>{
    return this.http.get(this.url+'/usuario');
  }
}
