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

  usuario: Usuario[] = [];

  constructor(private usuariosService: UsuariosService,
              private alertctrl: AlertController) { 
  }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuariosService.getUsuarios().subscribe(
      async response =>{
        if(response.success  === true){
          response.data.usuarios.forEach((e,i)=>{
            var nuevoU = new Usuario();
            nuevoU.idUsuario = e.idUsuario;
            nuevoU.usuario = e.usuario;
            nuevoU.cliente = e.cliente;
            nuevoU.rolUsuario = e.rol;
            nuevoU.nomUsuario = e.nombre;
            this.usuario.push(nuevoU);
          })
          // return this.usuario;
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

  borrarTarea(indice: number){
    //el splice remueve la tarea y actualiza el indice
    debugger
  }
}
