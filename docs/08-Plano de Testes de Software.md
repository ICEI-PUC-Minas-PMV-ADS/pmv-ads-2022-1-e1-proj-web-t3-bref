# Plano de Testes de Software

Os requisitos para realização dos testes de software são:

* Navegador da Internet - Chrome, Firefox ou Edge
* Conectividade de Internet para acesso ao site


Caso de teste | CT-01 - Verificar a função Lupa 
------------- | -----------------------
Requisito Associado | RF-011 O site deve permitir que o usuário possa alterar o tamanho da fonte. 
Objetivo do teste | Verificar se o aumento de fonte está funcionando corretamente
Passos | <p>1) Para aumentar a fonte, basta clicar no botão escrito "Font+", descrito logo abaixo do cabeçalho da página.<br/>2) Para diminuir a fonte, basta clicar no botão escrito "Font-", descrito logo abaixo do cabeçalho da página.<br/>3) Para retornar ao tamanho padrão da fonte, basta clicar no botão escrito "Reset", descrito logo abaixo do cabeçalho da página.</p>
Critérios de êxito | * Os textos da página devem aumentar ou reduzir o tamanho, de acordo com o comando.


Caso de teste | CT-02 - Verificar a barra de busca
------------- | -----------------------
Requisito Associado | RF-007 Deve ser disponibilizado uma barra de busca, para ser encontrado algum restaurante em específico.
Objetivo do teste | Verificar se a busca retorna o resultado esperado
Passos | <p>1) Digitar na barra de busca, disponível na index ou na página de listagem dos restaurantes, o nome desejado.<br/>2) O site retorna o resultado na página de listagem de restaurantes.</p>
Critérios de êxito | * Deve retornar o resultado correto da busca<br/>* Quando não houver restaurantes com o nome especificado, deve retornar uma lista de restaurantes sugeridos. 


Caso de teste | CT-03 - Teste de formulários da página Fale Conosco
------------- | -----------------------
Requisito Associado | RF-012 O site deve ter uma página de contato com os desenvolvedores da solução. 
Objetivo do teste | Verificar se o formulário está funcional na página para entrar em contato com os desenvolvedores do site.
Passos | <p>1) Entrar na página de Fale Conosco<br/>2) Preencher todos os campos<br/>3) Clicar no botão enviar.</p>
Critérios de êxito | * Deve retornar uma mensagem de sucesso ao enviar a mensagem.<br/>* Os campos devem retornar uma mensagem caso haja algum erro. 

Caso de teste | CT-04 - Visualização das informações do restaurante
------------- | -----------------------
Requisito Associado | RF-001 O site deve apresentar de forma clara o cardápio e formas de pagamentos dos restaurantes. 
Objetivo do teste | Verificar se as informações do restaurante são informadas na página info-restaurante.html
Passos | <p>1) Entrar na página info-restaurante.html com o parâmetro id do restaurante. Ex.: ./html/info-restaurante.html?id=1</p>
Critérios de êxito | * A página deve mostrar o conteúdo de acordo com os registros no arquivo JSON.

Caso de teste | CT-05 - Cadastro e login de usuário
------------- | -----------------------
Requisito Associado | RF-013 O site deve ter uma página para entrar em uma conta ou cadastrar. <br/>RF-014 O site deve ter uma página para redefinição de senha.
Objetivo do teste | Verificar se os formulários das páginas de entrar e cadastrar estão funcionando corretamente.
Passos | 1) Para entrar, basta entrar na página de Entrar/Cadastrar, na aba entrar, e preencher todos os campos. Nenhum campo pode ser nulo. <br/>2) Para cadastrar, basta entrar na página de Entrar/Cadastrar, na aba Cadastrar, e preencher todos os campos. Nenhum campo pode ser nulo.<br/><br/>Para redefinição da Senha: <br/>1) Na página de entrar/cadastrar, na aba entrar, o usuário deve clicar no link de redefinição: "Esqueceu a senha?"<br/>2) Após ser redirecionado para a página de redefinição, deve-se passar um email válido.<br/>3) Após validação, o usuário digita a nova senha e os campos devem ser iguais.
Critérios de êxito | * Deve retornar sucesso em caso de entrada e cadastros feitos corretamente conforme os requisitos dos campos.<br>* Deve retornar uma mensagem de erro caso algum campo esteja nulo ou fora dos requisitos. 

Caso de teste | CT-06 - Testar busca por localidade
------------- | -----------------------
Requisito Associado | RF-005 O site deve oferecer uma forma de pesquisa para localidades dos restaurantes.
Objetivo do teste | Atestar que a busca por localidade esteja retornando com sucesso os restaurantes do local buscado.
Passos | 1) Ao estar na página de listagem de restaurantes, preencher o campo "Cidade", na aba de filtros.<br/>2) Clicar em filtrar para atualizar a lista. Uma cidade de exemplo para pesquisa: Rio de Janeiro.
Critérios de êxito | * Deve retornar os restaurantes da cidade procurada.<br>* Caso não ache restaurantes com o filtro indicado, deve retornar uma mensagem e uma lista de restaurantes recomendados.