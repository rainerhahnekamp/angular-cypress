import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {SidemenuComponent} from "./sidemenu/sidemenu.component";

@NgModule({
  declarations: [HeaderComponent, SidemenuComponent],
  exports: [HeaderComponent, SidemenuComponent],
  imports: [CommonModule, RouterModule, MatButtonModule]
})
export class CoreModule {
}
