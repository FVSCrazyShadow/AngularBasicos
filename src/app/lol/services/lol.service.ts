import { Injectable } from "@angular/core";
import { Campeon } from "../interface/lol.interface";

@Injectable()

export class LolService {

  private _campeones: Campeon[] = [
    {
      Nombre: 'Vayne',
      Hp: 515,
      Ad: 60
    },
    {
      Nombre: 'Ashe',
      Hp: 539,
      Ad: 61
    },
    {
      Nombre: 'Jinx',
      Hp: 581,
      Ad: 57
    }
  ];

  get campeones(): Campeon[]
  {
    //return this._campeones; // esto se pasa por referencia, lo suyo sería romper esa referencia y copiar a un objeto nuevo
    return [...this._campeones]; //Así le decimos con los ... que copie _campeones en otro objeto nuevo con la misma información. SOLO es buena práctica.
  }

  constructor(){}

  agregarCampeon( campeon: Campeon){
    this._campeones.push(campeon);
  }
}
