import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class TipoProductoService {

    constructor(private http: HttpClient) { }

    getAllTiposProducto() {
        return this.http.get<any>(environment.apiURL + '/tipoProducto');
    }
}