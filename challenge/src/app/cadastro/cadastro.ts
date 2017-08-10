export class Cadastro {
  name: string;
  description: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

