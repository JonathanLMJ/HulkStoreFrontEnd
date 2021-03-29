import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/tienda",
    title: "Tienda",
    rtlTitle: "Tienda",
    icon: "icon-bag-16",
    class: ""
  },
  {
    path: "/productos",
    title: "Productos",
    rtlTitle: "Productos",
    icon: "icon-tag",
    class: ""
  },
  {
    path: "/usuario",
    title: "Registro de usuario",
    rtlTitle: "Registro de usuario",
    icon: "icon-single-02",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
