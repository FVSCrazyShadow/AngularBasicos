import { Component, OnInit } from '@angular/core';
import { Campeon } from '../interface/lol.interface';
import { LolService } from '../services/lol.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

/*   agregar( evento: any)
  {
    evento.preventDefault();
  } */

  default: Campeon = {
    Nombre: 'Jhin',
    Hp: 556,
    Ad: 57
  }

  constructor( ){

  }
}
