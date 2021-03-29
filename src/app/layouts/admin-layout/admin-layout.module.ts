import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { TiendaComponent } from "../../pages/tienda/tienda.component";
import { UsuarioComponent } from "../../pages/usuario/usuario.component";
import { ProductosComponent } from "../../pages/productos/productos.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NombreTipoProductoPipe } from "src/app/core/pipe/nombreTipoProducto.pipe";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    UsuarioComponent,
    ProductosComponent,
    TiendaComponent,
    NombreTipoProductoPipe
  ]
})
export class AdminLayoutModule {}
