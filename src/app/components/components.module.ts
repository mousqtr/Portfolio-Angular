import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { AvatarComponent } from "./content/avatar/avatar.component";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, AvatarComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, AvatarComponent]
})
export class ComponentsModule {}
