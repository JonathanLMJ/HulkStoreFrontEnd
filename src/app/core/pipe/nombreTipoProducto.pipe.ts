import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'nombreTipo'
})
export class NombreTipoProductoPipe implements PipeTransform{

    transform(value: number, mayusculas: boolean = false){
        let salida: string;
        switch (value) {
            case 1:
                salida = "Camiseta";
                break;
            case 2:
                salida = "Vaso";
                break;
            case 3:
                salida = "Comic";
                break;
            case 4:
                salida = "Juguete";
                break;
            case 5:
                salida = "Accesorio";
                break;
        
            default:
                salida = value.toString();
                break;
        }

        if (mayusculas) {
            salida = salida.toUpperCase();
        }

        return salida;

    }


}