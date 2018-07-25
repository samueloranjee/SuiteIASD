import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MembroPage } from './membro';

@NgModule({
  declarations: [
    MembroPage,
  ],
  imports: [
    IonicPageModule.forChild(MembroPage),
  ],
})
export class MembroPageModule {}
