# Plano de Testes de Software

Os requisitos para realização dos testes de software são:

* Navegador da Internet - Chrome, Firefox ou Edge
* Conectividade de Internet para acesso ao site


Caso de teste | Verificar a função Lupa 
------------- | -----------------------
Requisito Associado | RF-011 O site deve permitir que o usuário possa alterar o tamanho da fonte. 
Objetivo do teste | Verificar se o aumento de fonte está funcionando corretamente
Passos | <p>1) Para aumentar a fonte, basta clicar no botão escrito "Font+", descrito logo abaixo do cabeçalho da página.<br/>2)Para diminuir a fonte, basta clicar no botão escrito "Font-", descrito logo abaixo do cabeçalho da página.<br/>3)Para retornar ao tamanho padrão da fonte, basta clicar no botão escrito "Reset", descrito logo abaixo do cabeçalho da página.</p>
Critérios de êxito | * Os textos da página devem aumentar ou reduzir o tamanho, de acordo com o comando.


Caso de teste | Verificar a barra de busca
------------- | -----------------------
Requisito Associado | RF-007 Deve ser disponibilizado uma barra de busca, para ser encontrado algum restaurante em específico.
Objetivo do teste | Verificar se a busca retorna o resultado esperado
Passos | <p>1) Digitar na barra de busca, disponível na index ou na página de listagem dos restaurantes, o nome desejado.<br/>2) O site retorna o resultado na página de listagem de restaurantes.</p>
Critérios de êxito | * Deve retornar o resultado correto da busca<br/>* Quando não houver restaurantes com o nome especificado, deve retornar uma lista de restaurantes sugeridos. 



RF-001 O site deve apresentar de forma clara o cardápio e formas de pagamentos dos restaurantes.