import { Component, OnInit } from "@angular/core";
import { Producto } from "model/Producto";
import { ProductoService } from "src/app/core/service/producto.service";

@Component({
  selector: "app-tienda",
  templateUrl: "tienda.component.html"
})
export class TiendaComponent implements OnInit {

  responseProductos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.cargarProductos();

  }

  cargarProductos(): void {
    this.productoService.getAllProductos().subscribe(
      response => {
        this.responseProductos = response;
      },
      error => {
        console.log(error)
      }
    )
  }

}
