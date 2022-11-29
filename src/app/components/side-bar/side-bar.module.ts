import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { ButtonModule } from '../Button/button.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LeftSideBarComponent],
  imports: [CommonModule, ButtonModule, FontAwesomeModule],
  exports: [LeftSideBarComponent],
})
export class SideBarModule {}
