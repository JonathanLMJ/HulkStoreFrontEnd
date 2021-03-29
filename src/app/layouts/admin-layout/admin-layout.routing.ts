import { Routes } from "@angular/router";

import { TiendaComponent } from "../../pages/tienda/tienda.component";
import { UsuarioComponent } from "../../pages/usuario/usuario.component";
import { ProductosComponent } from "../../pages/productos/productos.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "tienda", component: TiendaComponent },
  { path: "usuario", component: UsuarioComponent },
  { path: "productos", component: ProductosComponent }
];
