import { Component, Input, OnInit } from '@angular/core';
import { Campeon } from '../interface/lol.interface';
import { LolService } from '../services/lol.service';

@Component({
  selector: 'app-campeones',
  templateUrl: './campeones.component.html'
})

export class CampeonesComponent {

  /* @Input() data: Campeon[] =[]; */

  get campeones(){
    return this.servicio.campeones;
  }

  constructor( private servicio: LolService){

  }
}
