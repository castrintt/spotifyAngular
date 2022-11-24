import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { RouterModule } from '@angular/router';
import { PlayerRoutes } from './player.routes';

@NgModule({
  declarations: [PlayerComponent],
  imports: [CommonModule, RouterModule.forChild(PlayerRoutes)],
  exports: [PlayerComponent],
})
export class PlayerModule {}
