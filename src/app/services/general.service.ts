import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  usuario: Usuario;
  constructor() {
    this.usuario = new Usuario();
   }

  guardarStorage(usuario:Usuario){
    localStorage.setItem('usuarioInv', JSON.stringify(usuario));
  }

  recuperarStorage(){     
    if(localStorage.getItem('usuarioInv')){
      this.usuario = JSON.parse(localStorage.getItem('usuarioInv'));
    }
    return this.usuario;
  }
}
