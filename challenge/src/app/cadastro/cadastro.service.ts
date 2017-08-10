import {Injectable} from '@angular/core';
import {Cadastro} from './cadastro';

@Injectable()
export class CadastroService {

  cadastros: Cadastro[] = [];

  constructor() {}

  getInit(): Cadastro[] {
    return [
      {name: 'Luke Skywalker', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'},
      {name: 'Darth Vader', description: 'Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.'},
      {name: 'Han Solo', description: 'Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.'}
    ];
  }

  addRecord(cadastro: Cadastro): CadastroService {
    this.cadastros.push(cadastro);
    return this;
  }

  editRecord(cadastro: Cadastro): CadastroService {
    const index: number = this.cadastros.indexOf(cadastro);
    if (index !== -1) {
      this.cadastros.splice(index, 1, cadastro);
    }
    return this;
  }

  removeRecordByName(cadastro: Cadastro): CadastroService {
    return this;
  }

  getAll(): Cadastro[] {
    return this.cadastros;
  }
}
