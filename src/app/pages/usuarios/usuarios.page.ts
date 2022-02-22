import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  usuario: Usuario;

  constructor(private usuariosService: UsuariosService,
              private alertctrl: AlertController) { 
    this.usuario = new Usuario();
              }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuariosService.getUsuarios().subscribe(
      async response =>{
        debugger
        if(response.success  === true){
          this.usuario.idUsuario = response.usuarios.idUsuario;
          this.usuario.contrasena = response.usuarios.contrasena;
          this.usuario.usuario = response.usuarios.usuario;
          this.usuario.rolUsuario = response.usuarios.rol;
          this.usuario.cliente = response.usuarios.cliente
  
        }else{
          console.log(this.usuario);
          const alert = await this.alertctrl.create({
            header: 'InventoryTech',
            message: 'Error recuperando datos de los Usuarios',
            buttons:['Aceptar']
          });
          alert.present();
        }
      },error =>{
        console.log(<any>error);
      }
    );
  }

}
