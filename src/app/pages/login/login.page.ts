import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { GeneralService } from 'src/app/services/general.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: Usuario;
  constructor(private logService:LoginService,
              private router: Router,
              private alertctrl: AlertController,
              private generalService: GeneralService) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  login(){
    //llamamos el loging del service
    this.logService.login(this.usuario.usuario,this.usuario.contrasena).subscribe(
      
      //en response se captura la respuesta del servicio
      async response =>{      
        if(response.success === true  ){
          //eliminamos la contraseña para que no muestre la contraseña en el local storage
          this.usuario.contrasena = "";
          //Guardar los datos del usuario 
          this.generalService.guardarStorage(this.usuario);                    
          //Navegar a la pagina principal
          this.router.navigateByUrl('folder/Inbox');
        }else{
          //se vacia el campo de contraseña
          this.usuario.contrasena = "";
          //creamos un alerta en caso de que los datos sean incorrectos
          const alert = await this.alertctrl.create({
            header: 'Login',
            message: 'Datos Incorrectos',
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
