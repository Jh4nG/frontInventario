import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  status : boolean = (localStorage.getItem('usuarioInv') == null)? false : true;

  constructor(private router : Router) {
    if(localStorage.getItem('usuarioInv') != null){
      //Navegar a la pagina principal
      this.router.navigateByUrl('folder/Inbox');
    }else{
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit(): void {
    // if(localStorage.getItem('reloadInv') == '2'){
    //   localStorage.setItem('reloadInv',"1");
    //   location.reload();
    // }
  }
}
