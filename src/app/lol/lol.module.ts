import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';


import { CampeonesComponent } from './campeones/campeones.component';

import { AgregarComponent } from './agregar/agregar.component';

import { LolService } from './services/lol.service';



@NgModule({
  declarations: [
    MainPageComponent,
    CampeonesComponent,
    AgregarComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule //Sirve para tratar formularios. No es el form reactivo (+ funciones)
  ],
  providers: [
    LolService
  ]
})

export class LolModule { }
