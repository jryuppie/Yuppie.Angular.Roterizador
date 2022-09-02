import { Component, OnInit, Input } from '@angular/core';
import { MenuLateralService } from './menu-lateral.service';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css'],
  providers: [MenuLateralService]
})
export class MenuLateralComponent implements OnInit {
  closeResult = '';

  toggle: boolean = false;

  titulo?: string

  valorTesteInput?: string

  

  constructor(private menuLateralService: MenuLateralService,private router: Router) { }

  ngOnInit(): void {


    // (document.getElementById('sidebar') as HTMLElement).style.setProperty('background-image', 'url(https://www.autoluks.com.br/uploads/1/1/5/6/115643989/background-images/1817667807.jpg)')   
    

    this.menuLateralService?.setTitulo('lateral')!
    
  }
  expandirSidebar(event: Event) {
    console.log(event);
    this.toggle = true;
  }

  mudarActive() {
    this.toggle = !this.toggle;
  }


  mudarTitulo(titulo: string) {
    this.titulo = titulo;
  }

  items!: MenuItem[]; 

}


