import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';

@NgModule({
  declarations: [LeftSideBarComponent],
  imports: [CommonModule],
  exports: [LeftSideBarComponent],
})
export class SideBarModule {}
