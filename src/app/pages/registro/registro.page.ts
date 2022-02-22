import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario: Usuario;
  constructor(private registroService: RegistroService,
    private router: Router,
    private alertCtrl: AlertController,
    ) { }

ngOnInit() {
this.usuario = new Usuario();
}
registro(){
//llamamos el loging del service
this.registroService.registro(this.usuario.idUsuario,this.usuario.usuario,this.usuario.nomUsuario,this.usuario.contrasena,this.usuario.rolUsuario,this.usuario.cliente).subscribe(
//en response se captura la respuesta del servicio
async response =>{
if(response.success === true ){                    

const alert = await this.alertCtrl.create({
  header: 'Registro',
  message: 'Registro Correcto',
  buttons: ['Aceptar']
});

alert.present();

//Navegar a la pagina principal
this.router.navigate(['/login']);


}else{

//creamos un alerta en caso de que los datos sean incorrectos
const alert = await this.alertCtrl.create({
  header: 'Registro',
  message: 'Registro Incorrecto',
  buttons: ['Aceptar']
});

alert.present();

}
},
error => {
console.log(<any>error);
}
);
}

}
