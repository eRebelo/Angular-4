import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NgModel } from '@angular/forms';
import {CursosComponent} from './cursos.component';
import {CursosService} from './cursos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursosComponent],
  exports: [
    CursosComponent
  ],
  providers: [CursosService]
})

export class CursosModule {}