import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";
import { ComponentsModule } from "src/app/components/components.module";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forRoot(routes), ComponentsModule],
  exports: [RouterModule]
})
export class HomeModule {}
