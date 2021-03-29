import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Producto } from "model/Producto";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ProductoService{

    constructor(private http: HttpClient){}

    getAllProductos(){
        return this.http.get<any>(environment.apiURL+'/producto');
    }

    createProducto(producto: Producto): Observable<Producto>{
        return this.http.post<Producto>(environment.apiURL + '/producto', producto);
    }

    updateProducto(idProducto: number, producto: Producto): Observable<Producto> {
        return this.http.put<Producto>(environment.apiURL + '/producto/' + idProducto, producto);
    }

    deleteProducto(idProducto: number){
        return this.http.delete<any>(environment.apiURL + '/producto/' + idProducto);
    }

    
}