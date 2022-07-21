import { TemplateBindingParseResult } from "@angular/compiler";
import { Component  } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent
{
    nombre: string = 'Spiderman';
    edad  : number = 45;

    obtenerNombre(): string
    {
        return `${ this.nombre } - ${ this.edad }`;
    }

    get nombreMayusculas(): string
    {
        return this.nombre.toUpperCase();
    }

    cambiarHeroe()
    {
        this.nombre = 'CrazyShadow';
    }

    cambiarEdad()
    {
        this.edad = 28;
    }
}