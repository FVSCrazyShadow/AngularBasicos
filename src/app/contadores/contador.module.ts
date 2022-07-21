import { CommonModule } from "@angular/common";
import { importProvidersFrom, NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";

@NgModule(
    {
        declarations: [
            ContadorComponent
        ],
        exports: [
            ContadorComponent
        ],
        imports: [
            CommonModule
        ]
    }
)

export class ContadorModule
{

}