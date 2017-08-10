import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {FormGroup, FormControl, Validators, ValidationErrors} from '@angular/forms';
import {CadastroService} from './cadastro.service';
import {Cadastro} from './cadastro';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  styles: [`
    input.ng-invalid {border-left: 5px solid red;}
    input.ng-valid {border-left: 5px solid green;}
  `]
})
export class CadastroComponent implements OnInit {

  modalFormAdd = new FormGroup({
    name: new FormControl('Nome', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])),
    description: new FormControl('Description', Validators.required)
  });

  modalFormEdit = new FormGroup({
    name: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])),
    description: new FormControl(null, Validators.required)
  });

  cadastros: Cadastro[] = [];
  oldCadastro: Cadastro;

  // cadastro: Cadastro = new Cadastro;

  @ViewChild('modalAddDismiss') modalAddDismiss: ElementRef;
  @ViewChild('modalEditDismiss') modalEditDismiss: ElementRef;

  constructor(private cadastroService: CadastroService) {
    this.cadastros = cadastroService.getInit();
    // this.cadastros = cadastroService.getAll();
  }

  onSubmitAdd() {
    // this.cadastroService.addRecord(this.modalFormAdd.value);
    // this.cadastro = new Cadastro();
    this.cadastros.push(this.modalFormAdd.value);

    this.clearModalAdd();
  }

  editRecord(cadastro) {
    this.oldCadastro = cadastro;
    this.modalFormEdit.controls['name'].setValue(cadastro.name);
    this.modalFormEdit.controls['description'].setValue(cadastro.description);
  }

  onSubmitEdit() {
    // this.cadastroService.editRecord(this.modalFormAdd.value);
    // this.cadastro = new Cadastro();
    const index: number = this.cadastros.indexOf(this.oldCadastro);
    if (index !== -1) {
      this.cadastros.splice(index, 1, this.modalFormEdit.value);
    }
    this.clearModalEdit();
  }

  removeRecord(cadastro) {
    // this.cadastroService.removeRecordByName(this.modalFormAdd.value);
    // this.cadastro = new Cadastro();
    const index: number = this.cadastros.indexOf(cadastro);
    if (index !== -1) {
      this.cadastros.splice(index, 1);
    }
  }

  clearModalAdd() {
    // close modal
    this.modalAddDismiss.nativeElement.click();
    this.modalFormAdd.reset();
    this.modalFormAdd.controls['name'].setValue('Name');
    this.modalFormAdd.controls['description'].setValue('Description');
  }

  clearModalEdit() {
    // close modal
    this.modalEditDismiss.nativeElement.click();
    this.modalFormEdit.reset();
    this.modalFormEdit.controls['name'].setValue('');
    this.modalFormEdit.controls['description'].setValue('');
  }

  ngOnInit() {
  }
}
