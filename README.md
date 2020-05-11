
# README
* Heroes App
* Version 0.1.0
### How do I get set up?
*  [Install nodejs](https://nodejs.org/en/download/)
* Run `npm install` Para instalar as  Dependências do projeto
* Run `npm start` incia a aplicação (http://localhost:3000)
* Run `npm run build` gera uma versão de produção
* Run `npm run lint` verifica se o código está de acordo com os padrões definidos no *.eslintrc.js*
* Run `npm run lint:fix` verifica  e altera o código para obedecer aos padrões definidos no *.eslintrc.js*
* Run `npm run test` executa os testes da aplicação
* Run `npm run test:coverage` verifica a cobertura de teste da aplicação


### DEPENDÊNCIAS! 
**@material-ui/core**
Framework css que auxilia em um um desenvolvimento mais rápido e fácil dos componentes.

**@material-ui/iconse**
Disponibiliza icones 

**@testing-library/jest-dom** 
Framework de Testes em JavaScript que ao mesmo tempo um test runner e um assertion library
 
 **@testing-library/react** 
Concede um conjunto de utilitários que permitem testar componentes React sem depender dos detalhes de implementação.

**axios**
API para interagir tanto com XMLHttpRequest quanto com a interface http do node 

**css-mediaquery** 
Este é um hook de CSS media query para React. Foi utilizado para ajudar nos testes permindo a renderização de componentes que deveriam estar ocultos com base no redimencionamento da tela do browser. 

**mutationobserver-shim**
 Aplicado no setup de teste para auxilar aos testes na verficicação das atualizaçôes do estado dos componentes.

**prop-types**
Checagem de tipos das properties dos componentes React

**react-content-loader**
 Disponibiliza animações de load de página, foi utilizado no fallback do Suspense
 
**react-hook-form**
Para gerenciamento de formulário

**react-router-dom**
Utilizado para criar as rotas do projeto

**react-router-prop-types**
Checagem de tipos fornecidos pelo react-router-dom como *history* e *match*.

**history**
 Foi utilizado para criar um helper de testes  com o *createMemoryHistory*, assim possibilitando os testes de componentes que fazem uso do Router.
 
**styled-components**
 Foi utilizadopara a aplicação do CSS-in-JS  permitindo o usso do javaScript seja utilizado para estilizar componentes.
 
  
### DEPENDÊNCIAS DE DENSOLVIMENTO!
**@eslint** 
ESLint é uma ferramenta de análise de código estática para identificar padrões problemáticos encontrados no código JavaScript.

**eslint-config-airbnb**
Aplica no projeto os padrôes de desenvolvimento do  airbnb.

**eslint-config-prettier**
Desativa todas as regras desnecessárias ou que podem entrar em conflito com o Prettier.

 **eslint-plugin-import**
Oferece suporte a sintaxe de importação e exportação de componentes, evitando problemas de erros ortográficos nos caminhos do arquivo.

**eslint-plugin-jsx-a11y**
	Peer dependencies do eslint-config-airbnb
	
**eslint-plugin-prettier**
Executa o Prettier como uma regra do ESLint e relata as diferenças como problemas individuais do ESLint.

**eslint-plugin-react**
Peer dependencies do eslint-config-airbnb

**eslint-plugin-react-hooks**
Ativa no lint as regras do React hook

**git-commit-msg-linter**
Faz a Padronização de mensagens de commit como por exemplo *feat*: para novas features e *test:* para escrita de testes

**husky**
Da acesso aos hooks do git assim podendo gerar ações de pre commit e pre push

**lint-staged**
Utilizado em conjunto com o husk para padronização de código ao commitar.

**prettier**
Utilizado para definir uma padronização de código.

### IMPORTANTE!
Caso você queira contribui com esse projeto é importante que tenha conhecimento em:
  

*  [React](https://reactjs.org/)
*  [Material-UI](https://material-ui.com/)
*  [Jest](https://jestjs.io/)
* [Testing Library](https://testing-library.com/)