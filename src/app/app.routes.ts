import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";

export const APP_ROUTES: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {path: "home", redirectTo: ""},
      {
        path: "customer",
        loadChildren: () => import("./customer/customer.module").then((m) => m.CustomerModule)
      }
    ]
  }
];
