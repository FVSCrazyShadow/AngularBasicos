import { Component } from '@angular/core';

@Component(
    {
        selector: 'app-contador', //El nombre del componente
        template: `
            <h1>{{ titulo }}</h1>
            <p>La Base es: <strong> {{ base }} </strong></p>
            <button (click)="sumarNumero(base)"> +{{base}} </button>
            <span> {{ numero }} </span>
            <button (click)="restarNumero(base)"> -{{base}} </button>
        `
    }
)
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 1;

    sumarNumero(base: number) {
        if (this.numero < 20) {
            this.numero += base;
        }
    }

    restarNumero(base: number) {
        if (this.numero > 0) {
            this.numero -= base;
        }
    }
}