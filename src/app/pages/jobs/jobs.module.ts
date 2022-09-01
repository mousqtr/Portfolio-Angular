import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { JobsComponent } from "./jobs.component";
import { RouterModule, Routes } from "@angular/router";
import { ComponentsModule } from "src/app/components/components.module";

const routes: Routes = [{ path: "jobs", component: JobsComponent }];

@NgModule({
  declarations: [JobsComponent],
  imports: [CommonModule, RouterModule.forRoot(routes), ComponentsModule],
  exports: [RouterModule]
})
export class JobsModule {}
