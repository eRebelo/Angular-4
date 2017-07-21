# Quick Start

## Ambiente de Desenvolvimento
- Instalar nodeJS com NPM: https://nodejs.org/en/download/
 - Versão: **node -v** 
 - Versão: **npm  -v**
- Instalar typescript: **npm install -g typescript**
 - Versão: **tsc -v**
 - Obs.: NPM (NodeJS) é o equivalente ao Maven (Java)
- Instalar Angular CLI: **npm install -g @angular/cli**
 - Versão: **ng version**
 - Desinstalar: ****npm uninstall -g angular-cli @angular-cli angular-cli @angular/cli**
- Instalar IDE Atom: https://atom.io/

----------
## O que é Angular CLI?
Angular cli é uma interface de linha de comando para crirar aplicativos angulares e andaimes, usando módulos de estilo nodejs. Algumas das coisas que podem ser adicionadas com andaimes são componentes, rotas, serviços, classes e tubulações.

----------

## O que mudou no Angular 4?
- **ngIF**
 - `<div *ngIf="mostraCursos; else cursosVazio">
	 Lista de cursos aqui.
	< /div>
<ng-template #cursosVazio>
     Não existem cursos para serem listados
	</ng-template>`
- **ngFor**: | async as
- Validações para Formulários: tag **email** substituindo o pattern regex
- Renderer depreciado pelo **Renderer2**, marcação de estilo…
- TypeScript 1.8 -> **2.1**


----------
## Estrutura do Projeto Angular
No controle de versão do projeto não é necessário incluir a pasta de bibliotecas e dependências node_modules, pois além de ser 
extensa, ao baixar o projeto, basta executar o comando npm install dentro do diretório do projeto, para que sejam baixadas todas as 
dependências necessárias incluídas no arquivo package.json.

- Arquivo de configurações gerais do projeto (add bootstrap, css, ...): **.angular-cli.json**
- Arquivo de configurações da execução do projeto: **protactor.conf.js**
- Arquivo de configurações de teste: **karma.conf.js**
- Arquivo de configurações e dependências do projeto: **package.json**

- Bibliotecas e dependências do projeto: **/node_modules/**

- Código fonte da aplicação (typescript/javascript, CSS, HTML, imagens, ...): **/scr/**
- Arquivo de bibliotecas auxiliares: **/src/polyfills.ts**
- Arquivos de configurações de ambiente: **/src/environments/**


----------
## Criando Primeira Aplicação usando Angular CLI
- Criar um novo projeto: **ng new primeiro-projeto**
 - Navegar dentro do projeto: cd primeiro-projeto
 - Instalar módulos node (se não instalados automaticamente): **npm install**
- Criar um novo componente: **ng g c meu-primeiro**
 - create src\app\meu-primeiro\meu-primeiro.component.css
 - create src\app\meu-primeiro\meu-primeiro.component.html
 - create src\app\meu-primeiro\meu-primeiro.component.spec.ts
 - create src\app\meu-primeiro\meu-primeiro.component.ts
 -  update src\app\app.module.ts
- Criar um novo **módulo**: **ng g m cursos**
 - create src\app\cursos\cursos.module.ts
- Criar novo **componente**: **ng g c cursos**
- Para exibir o conteúdo html do novo componente cursos criado, deve-se importar no app.module o módulo CursosModule
- Criar um **serviço**[backend]: **ng g s cursos/cursos**
 - create src\app\cursos\cursos.service.spec.ts
 - create src\app\cursos\cursos.service.ts
 - Para instanciar um objeto service em um module, devemos adicionar a referência providers CursosService dentro do módulo CursosModule
- Executar o rservidor: **ng serve**
 - http://localhost:4200/


----------
##Criando Primeira Aplicação sem Angular CLI
- mkdir angular2-aula1
- cd angular2-aula1
- npm init -y
 - gera package.json, altera-se o conteúdo
- npm install
- criar arquivo tsconfig.json
 - adiciona-se o conteúdo
- mkdir app
- cd app
- criar arquivo app-component.ts
 - adiciona-se o conteúdo
- criar arquivo boot.ts
 - adiciona-se o conteúdo
- cd ..
- criar arquivo index.html
 - adiciona-se o conteúdo


----------
## Adicionar Bibliotecas
### Booststrap: https://goo.gl/a5aScV
- Executar o comando dentro do diretório do projeto: npm install bootstrap@next
- Adicionar os arquivos necessários dentro da tag scripts em .angular-cli.json:
 - "../node_modules/jquery/dist/jquery.js",
 - "../node_modules/tether/dist/js/tether.js",
 - "../node_modules/bootstrap/dist/js/bootstrap.js"
- Adicionar os arquivos necessários dentro da tag styles em .angular-cli.json:
 - "../node_modules/bootstrap/dist/css/bootstrap.css",

### Materialize: https://goo.gl/EW9u3W
- Executar os comandos dentro do diretório do projeto:
 - npm install materialize-css --save
 - npm install angular2-materialize --save	
 - npm install jquery@^2.2.4 --save
 - npm install hammerjs --save
- Adicionar os arquivos necessários dentro da tag scripts em .angular-cli.json:
 - "../node_modules/jquery/dist/jquery.js",
 - "../node_modules/hammerjs/hammer.js",
 - "../node_modules/materialize-css/dist/js/materialize.js"
- Adicionar os arquivos necessários dentro da tag styles em .angular-cli.json:
 - "../node_modules/materialize-css/dist/css/materialize.css"


----------
##Referências
[1] Passo-a-passo: http://kazale.com/curso-basico-angular-2/
[2] Curso YouTube: https://goo.gl/bDLqfF
[3] Angular-CLI GitHub: https://github.com/angular/angular-cli
[4] TypeScript: http://es6-features.org/#BlockScopedFunctions
[5] Conversor TS -> JS: https://babeljs.io/repl/