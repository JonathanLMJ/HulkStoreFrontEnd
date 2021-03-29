import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Producto } from "model/Producto";
import { TipoProducto } from "model/TipoProducto";
import { ProductoService } from "src/app/core/service/producto.service";
import { TipoProductoService } from "src/app/core/service/tipoProducto.service";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: "app-productos",
  templateUrl: "./productos.component.html",
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  responseProductos: Producto[] = [];
  responseTiposProducto: TipoProducto[] = [];


  modificarProductoForm: FormGroup;
  private modificarProductoFormBuilder = new FormBuilder;

  idProducto: number = null;
  nombreProducto: string = "";
  descripcionProducto: string = "";
  valorProducto: number = 0;
  tipoProducto: number = 0;

  constructor(private productoService: ProductoService,
              private tipoProductoService: TipoProductoService,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService,
              private router: Router) {}

  ngOnInit() {
   
    this.crearControlesFormulario();
    this.cargarProductos();
    this.cargarTiposProducto();
  }

  cargarProductos():void{
    this.productoService.getAllProductos().subscribe(
      response => {
        this.responseProductos = response;
      },
      error => {
        console.log(error)
      }
    )
  }

  cargarTiposProducto(): void {
    this.tipoProductoService.getAllTiposProducto().subscribe(
      response => {
        this.responseTiposProducto = response;
      },
      error => {
        console.log(error)
      }
    )
  }

  crearProducto(){
    const nuevoProducto = new Producto(0, this.nombreProducto, this.descripcionProducto, this.valorProducto, this.tipoProducto);

    this.productoService.createProducto(nuevoProducto).subscribe(
      response => {
        this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Producto creado correctamente ', '', {
          enableHtml: true,
          toastClass: "alert alert-success alert-with-icon",
          positionClass: 'toast-top-center',
          timeOut: 2000
        });
        this.cargarProductos();
        this.limpiarModal();
      },
      error => {
        console.log(error);
      }
    )
  }

  crearControlesFormulario(){
    this.modificarProductoForm = this.modificarProductoFormBuilder.group({
      nombreProducto: new FormControl ('', [Validators.required])
    });
  }

  modificarProducto(){

    const productoModificado = new Producto(this.idProducto, this.nombreProducto, this.descripcionProducto, this.valorProducto, this.tipoProducto);

    this.productoService.updateProducto(productoModificado.idProducto, productoModificado).subscribe(
      response => {
        this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Producto modificado correctamente ', '', {
          enableHtml: true,
          toastClass: "alert alert-success alert-with-icon",
          positionClass: 'toast-top-center',
          timeOut: 2000
        });
        this.cargarProductos();
        this.limpiarModal();
      },
      error => {
        console.log(error);
      }
    )
  }

  eliminarProducto(idProducto: number){
    this.productoService.deleteProducto(idProducto).subscribe(
      response => {
        this.cargarProductos();
        this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Producto eliminado correctamente ', '', {
          enableHtml: true,
          toastClass: "alert alert-success alert-with-icon",
          positionClass: 'toast-top-center',
          timeOut: 2000
        });      },
      error => {
        console.log(error);
      }
    )
  }

  cargarDatosFila(data: Producto){
    this.idProducto = data.idProducto;
    this.nombreProducto = data.nombreProducto;
    this.descripcionProducto = data.descripcionProducto;
    this.valorProducto = data.valorProducto;
    this.tipoProducto = data.tipoProducto;
  }

  limpiarModal(){
    this.idProducto = null;
    this.nombreProducto = null;
    this.descripcionProducto = null;
    this.valorProducto = null;
    this.tipoProducto = null;
  }

}
