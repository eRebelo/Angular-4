import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CadastroComponent} from './cadastro.component';
import {CadastroService} from './cadastro.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CadastroComponent],
  exports: [
    CadastroComponent
  ],
  providers: [CadastroService]
})
export class CadastroModule {}
