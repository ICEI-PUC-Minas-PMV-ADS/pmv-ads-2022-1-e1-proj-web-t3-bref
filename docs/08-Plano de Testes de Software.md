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

Caso de teste | CT-06 - Testar filtros de busca
------------- | -----------------------
Requisito Associado | RF-005 O site deve oferecer uma forma de pesquisa para localidades dos restaurantes.<br/>RF-006 O site deve permitir que o usuário encontre a melhor opção de restaurante por sua localidade, formas de pagamento ou produtos presentes no menu utilizando uma ferramenta de filtro.<br/>RF-008 O site deve apresentar um menu de categorias, para categorizar os restaurantes de acordo com o tipo de comida que é servido.
Objetivo do teste | Atestar que a busca por filtros esteja retornando com sucesso a lista de restaurantes.
Passos | 1) Ao estar na página de listagem de restaurantes,  completar a aba de filtros.<br/>2) Clicar em filtrar para atualizar a lista. Um exemplo de filtro seria pesquisar pela cidade Rio de Janeiro.
Critérios de êxito | * Deve retornar os restaurantes da cidade procurada.<br>* Caso não ache restaurantes com o filtro indicado, deve retornar uma mensagem e uma lista de restaurantes recomendados.

Caso de teste | CT-07 - Visualizar o tempo de espera
------------- | -----------------------
Requisito Associado | RF-003 O site deve permitir ao usuário visualizar o tempo de espera e as reservas que podem ser feitas no dia
Objetivo do teste | Atestar que a lista de restaurantes mostra a lotação do restaurante e o tempo de espera do local.
Passos | 1) Basta fazer uma busca no site que irá listar os restaurantes na página de listagem de restaurantes.
Critérios de êxito | * Os cards dos restaurantes devem mostrar a lotação e o tempo de espera do local.

Caso de teste | CT-08 - Teste para a página de reserva
------------- | -----------------------
Requisito Associado | RF-004 O site deve oferecer ao usuário entrar na fila online ou fazer uma reserva quando o restaurante disponibilizar esse serviço.
Objetivo do teste | Verificar se a página de informações dos restaurantes redireciona o usuário à página de reserva
Passos | 1) Entrar na informação de um restaurante.<br> Ex.: ./html/info-restaurante.html?id=3<br/>2) Clicar em reserva<br>3) Fazer login no site<br>4) Preencher os campos de acordo com os requisitos de cada campo<br>5) Clicar em reservar.
Critérios de êxito | * Ao final dos passos, o usuário deve estar na página de Reserva Concluída.


Caso de teste | CT-09 - Contato com o restaurante
------------- | -----------------------
Requisito Associado | RF-009 O site deve permitir que o cliente tenha meios de contato direto com os restaurantes escolhidos.
Objetivo do teste | Verificar se o botão de contato redireciona para o contato do restaurante via WhatsApp.
Passos | 1) Entrar na informação de um restaurante.<br> Ex.: ./html/info-restaurante.html?id=3<br/>2) Clicar em contato<br>3) Ser redirecionado à API do whatsapp com o número do restaurante
Critérios de êxito | * Ao final dos passos, o usuário deve ser redirecionado à API do whatsapp para contado com o restaurante.

Caso de teste | CT-10 - Endereço do Restaurante
------------- | -----------------------
Requisito Associado | RF-002 O site deve apresentar, para cada restaurante, o seu endereço.
Objetivo do teste | Verificar a página info-restaurante está carregando o endereço correspondente ao id referenciado da página listagem-restaurantes.
Passos | 1) Entrar na informação de um restaurante.<br> Ex.: ./html/info-restaurante.html?id=3<br/>2) A informação correspondente ao id do restaurante será carregada na parte superior direita da página.
Critérios de êxito | * Uma vez carregada, a página deve mostrar o endereço correto do restaurante.

