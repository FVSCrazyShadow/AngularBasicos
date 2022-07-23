import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';

import { ContadorModule } from './contadores/contador.module';

import { LolModule } from './lol/lol.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    LolModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
