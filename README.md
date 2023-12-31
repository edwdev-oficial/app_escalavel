# Aplicação Modelo Altamente Escalável

Esta é uma aplicação modelo altamente escalável que foi projetada com modularização para facilitar o reuso e extensão. Ela inclui pastas como `home`, `moduleOne` e `moduleTwo`, que podem ser renomeadas para algo mais relevante dependendo da finalidade da aplicação.
Trabalha com web worker para processar dados em segundo plano favorecendo a UX. 
Permite a exibição de grande volume de dados, reenderizando sob demanda com o scroll das tabelas.

## Principais Recursos

- Utilização de Web Workers para processar grandes volumes de dados sem travar a thread principal.
- Renderização de dados em tabelas sincronizada com o scroll.
- Módulo `utils` que fornece funcionalidades comuns acessíveis a todos os módulos.

## Estrutura de Pastas

- `index.html`: Página inicial da aplicação.
- `index.js`: Arquivo principal que inicia a aplicação.
- `config/config.js`: Configurações da aplicação.
- `src/home`: Módulo principal da aplicação.
  - `view/homeView.js`: Componente da view.
  - `homeController.js`: Controlador do módulo.
- `src/moduleOne` (ou "Outro nome mais conveniente"):
  - `model/moduleOneModel.js`: Modelo para obtenção de dados.
  - `view/moduleOneComponent.html`: Componente da view.
  - `view/moduleOneView.js`: Componente da view.
  - `controller/moduleOneController.js`: Controlador do módulo.
- `src/moduleTwo` (ou "Outro nome mais conveniente"): Módulo semelhante ao `moduleOne` para fins de teste.
- `src/worker`: Pasta para os Web Workers.
  - `worker.js`: Arquivo principal do Web Worker.
  - `service.js`: Lógica de serviço para processamento de dados no Web Worker.
- `src/utils`: Utilitários compartilhados.
  - `createTable.js`: Classe para criação e atualização de tabelas.

## Como Iniciar a Aplicação

1. Abra o arquivo `index.html` no seu navegador.

## Contribuições

Sinta-se à vontade para contribuir com este projeto. Você pode estender os módulos existentes ou adicionar novos módulos de acordo com suas necessidades.

Lembre-se de verificar a documentação de cada módulo para entender como eles funcionam.

---



## Módulo `home`

### Visão Geral

O módulo `home` é o módulo principal da aplicação. Ele atua como o ponto de entrada e gerencia a navegação entre outros módulos, como `moduleOne` e `moduleTwo`.

### Estrutura de Arquivos

- `view/homeView.js`: Este arquivo contém a classe `HomeView`, que lida com a interação do usuário na página inicial. Ele também é responsável por carregar os componentes de outros módulos quando o usuário clica nos botões de navegação.

- `homeController.js`: O controlador do módulo `home` é responsável por inicializar a visão e lidar com a navegação entre os diferentes módulos da aplicação.

## Módulo `moduleOne` 

### Visão Geral

O módulo `moduleOne` é um dos módulos da aplicação. Ele é responsável por exibir e gerenciar dados relacionados moduleOne.

### Estrutura de Arquivos

- `model/moduleOneModel.js`: Este arquivo contém a classe `ModuleOneModel`, que lida com a obtenção de dados. Ele se comunica com as fontes de dados, como APIs ou bancos de dados locais.

- `view/moduleOneComponent.html`: Este arquivo é o componente de visualização para o módulo `moduleOne`. Ele define a estrutura HTML dos elementos relacionados ao moduleOne.

- `view/moduleOneView.js`: A classe `ModuleOneView` neste arquivo lida com a interação do usuário no módulo `moduleOne`. Ele também inclui a lógica para renderizar dados na tabela e detectar rolagem para carregar mais informações.

- `controller/moduleOneController.js`: O controlador do módulo `moduleOne` é responsável por coordenar as ações do modelo e da visão. Ele também se comunica com o Web Worker para processar dados em segundo plano.

## Módulo `moduleTwo` (ou "Outro nome mais conveniente")

### Visão Geral

O módulo `moduleTwo` é semelhante ao `moduleOne` e lida com dados relacionados ao moduleTwo. Ele compartilha a mesma estrutura de arquivos e funcionalidades, mas pode ser destinado a outros dados e funcionalidades.

### Estrutura de Arquivos

- `model/moduleTwoModel.js`: Este arquivo contém a classe `ModuleTwoModel`, que lida com a obtenção de dados relacionados às ao moduleTwo. Ele é semelhante ao `moduleOneModel` mas pode ser auterado.

- `view/moduleTwoComponent.html`: Este arquivo é o componente de visualização para o módulo `moduleTwo`. Ele define a estrutura HTML dos elementos relacionados ao moduleTwo.

- `view/moduleTwoView.js`: A classe `ModuleTwoView` neste arquivo lida com a interação do usuário no módulo `moduleTwo`, incluindo a renderização de dados em tabelas e a detecção de rolagem.

- `controller/moduleTwoController.js`: O controlador do módulo `moduleTwo` é semelhante ao `moduleOneController` e coordena as ações do modelo e da visão, além de se comunicar com os Web Workers para processamento de dados em segundo plano.

Essas documentações oferecem uma visão geral dos módulos e suas estruturas de arquivos. Certifique-se de incluir informações mais detalhadas, instruções de uso e documentação de funções específicas em seus próprios arquivos README em cada módulo, para facilitar a compreensão e o desenvolvimento futuro da aplicação.