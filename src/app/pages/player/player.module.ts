import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { RouterModule } from '@angular/router';
import { PlayerRoutes } from './player.routes';
import { SideBarModule } from 'src/app/components/side-bar/side-bar.module';

@NgModule({
  declarations: [PlayerComponent],
  imports: [CommonModule, RouterModule.forChild(PlayerRoutes), SideBarModule],
  exports: [PlayerComponent],
})
export class PlayerModule {}
