import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Campeon } from '../interface/lol.interface';

import { LolService } from '../services/lol.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})

export class AgregarComponent{

  @Input() nuevo: Campeon = {
    Nombre: '',
    Hp: 0,
    Ad: 0
  }

  constructor( private servicio: LolService){}

  /* @Output() nuevoCampeon: EventEmitter<Campeon> = new EventEmitter<Campeon>(); */

  procesar()
  {
    if( this.nuevo.Nombre.trim().length == 0) { return; }

    /* this.nuevoCampeon.emit( this.nuevo ); */
    this.servicio.agregarCampeon( this.nuevo );


    this.nuevo = {
      Nombre: '',
      Hp: 0,
      Ad: 0
    }
  }
}

