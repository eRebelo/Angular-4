# Quick Start

## Ambiente de Desenvolvimento
- Instalar nodeJS com NPM: https://nodejs.org/en/download/
<br>Versão: **node -v** 
<br>Versão: **npm  -v**
- Instalar typescript: **npm install -g typescript**
<br>Versão: **tsc -v**
<br>Obs.: NPM (NodeJS) é o equivalente ao Maven (Java)
- Instalar Angular CLI: **npm install -g @angular/cli**
<br>Versão: **ng version**
<br>Desinstalar: **npm uninstall -g angular-cli @angular-cli angular-cli @angular/cli**
- Instalar IDE Atom: https://atom.io/

----------
## O que é Angular CLI?
Angular cli é uma interface de linha de comando para criar aplicativos angulares já com a estrutura padrão, usando módulos de estilo nodejs. Algumas das coisas que podem ser adicionadas são: componentes, rotas, serviços, classes e tubulações.

----------

## O que mudou no Angular 4?
- **ngIF**
<br>`<div *ngIf="mostraCursos; else cursosVazio">
Lista de cursos aqui.
	< /div>`
<br>`<ng-template #cursosVazio>
Não existem cursos para serem listados
</ng-template>`
- **ngFor**: async as
- Validações para Formulários: tag **email** substituindo o regex pattern
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
<br>Navegar dentro do projeto: cd primeiro-projeto
<br>Instalar módulos node (se não instalados automaticamente): **npm install**
- Criar um novo componente: **ng g c meu-primeiro**
<br>create src\app\meu-primeiro\meu-primeiro.component.css
<br>create src\app\meu-primeiro\meu-primeiro.component.html
<br>create src\app\meu-primeiro\meu-primeiro.component.spec.ts
<br>create src\app\meu-primeiro\meu-primeiro.component.ts
<br> update src\app\app.module.ts
- Criar um novo **módulo**: **ng g m teste**
<br>create src\app\teste\teste.module.ts
- Criar novo **componente**: **ng g c teste**
- Para exibir o conteúdo html do novo componente teste criado, deve-se importar no app.module o módulo testeModule
- Criar um **serviço**[backend]: **ng g s teste/teste**
<br>create src\app\teste\teste.service.spec.ts
<br>create src\app\teste\teste.service.ts
<br>Para instanciar um objeto service em um module, devemos adicionar a referência providers TesteService dentro do módulo TesteModule
- Executar o rservidor: **ng serve**
<br>http://localhost:4200/


----------
## Criando Primeira Aplicação sem Angular CLI
- mkdir angular2-aula1
- cd angular2-aula1
- npm init -y
<br>gera package.json, altera-se o conteúdo
- npm install
- criar arquivo tsconfig.json
<br>adiciona-se o conteúdo
- mkdir app
- cd app
- criar arquivo app-component.ts
<br>adiciona-se o conteúdo
- criar arquivo boot.ts
<br>adiciona-se o conteúdo
- cd ..
- criar arquivo index.html
<br>adiciona-se o conteúdo


----------
## Adicionar Bibliotecas
### Booststrap: https://goo.gl/a5aScV
- Executar o comando dentro do diretório do projeto: npm install bootstrap@next
- Adicionar os arquivos necessários dentro da tag scripts em .angular-cli.json:
<br>"../node_modules/jquery/dist/jquery.js",
<br>"../node_modules/tether/dist/js/tether.js",
<br>"../node_modules/bootstrap/dist/js/bootstrap.js"
- Adicionar os arquivos necessários dentro da tag styles em .angular-cli.json:
<br>"../node_modules/bootstrap/dist/css/bootstrap.css",

### Materialize: https://goo.gl/EW9u3W
- Executar os comandos dentro do diretório do projeto:
<br>npm install materialize-css --save
<br>npm install angular2-materialize --save	
<br>npm install jquery@^2.2.4 --save
<br>npm install hammerjs --save
- Adicionar os arquivos necessários dentro da tag scripts em .angular-cli.json:
<br>"../node_modules/jquery/dist/jquery.js",
<br>"../node_modules/hammerjs/hammer.js",
<br>"../node_modules/materialize-css/dist/js/materialize.js"
- Adicionar os arquivos necessários dentro da tag styles em .angular-cli.json:
<br>"../node_modules/materialize-css/dist/css/materialize.css"


----------
## Referências

 1. Passo-a-passo: http://kazale.com/curso-basico-angular-2/
 2. Curso YouTube: https://goo.gl/bDLqfF
 3. Angular-CLI GitHub: https://github.com/angular/angular-cli
 4. TypeScript: http://es6-features.org/#BlockScopedFunctions
 5. Conversor TS -> JS: https://babeljs.io/repl/