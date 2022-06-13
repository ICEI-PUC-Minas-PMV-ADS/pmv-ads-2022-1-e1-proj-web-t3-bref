# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A seguir estão apresentadas as personas que foram encontradas durante a pesquisa de resolução e entendimento do problema. 

## Personas

| Maria Helen | Idade:29 |Persona 1|
|:---:|:---:|:---:|
| ![Persona Maria Helen](img/persona-maria-helen.png)| **Ocupação:**  Veterinária, é perita em animais silvestres e em análises clínicas.| **Aplicativos:**  Instagram LinkedIn YouTube |
| **Motivações**| **Frustrações** | **Hobbies e História** |
| Melhorar a saúde pública cuidando e ensinando a cuidar dos animais. | Sempre que ela sai com seus amigos para comer onde não há reservas, eles enfrentam filas enormes. | Adora sair para comer e conhecer novos restaurantes. Praticar Ioga. |

| Tereza Santos | Idade: 54 |Persona 2|
|:---:|:---:|:---:|
| ![Persona Tereza Santos](img/persona-tereza-santos%20.png) | **Ocupação:** Professora Aposentada| **Aplicativos:** Instagram LinkedIn YouTube |
| **Motivações**| **Frustrações**| **Hobbies e História** |
| Dedicar a vida à família. Cozinhar para seus netos. Auxiliar seus netos nos estudos. | Não acha sites em que é possível adaptar o tamanho das fontes. | Passar tempo com os netos. Conhecer novos lugares. Participar de grupos de leitura.|

| Fabricio Ferreira | Idade: 34 |Persona 3|
|:---:|:---:|:---:|
| ![Persona Fabricio Ferreira](img/persona-fabricio-ferreira.png) | **Ocupação:** Instrutor financeiro, focado em auxiliar nas decisões de negócios de seus clientes.| **Aplicativos:** Telegram YouTube Instagram Aplicativos de bancos LinkedIn |
| **Motivações**| **Frustrações**| **Hobbies e História** |
| Ajudar pessoas a alcançar independência financeira. Compartilhar informações e conhecimentos.|Sente que perde tempo quando precisa encontrar de última hora um lugar para se alimentar. |Futebol com os amigos. Encontros em restaurantes para conhecer pessoas. Experimentar pratos de culturas diferentes.|

| Vitor Andrade | Idade: 28 |Persona 4|
|:---:|:---:|:---:|
| ![Persona Vitor Andrade](img/persona-vitor-andrade.png) | **Ocupação:** Desenvolvedor Backend, com foco em resolver os problemas dos clientes da maneira mais fácil, rápida e eficaz.| **Aplicativos:** Telegram YouTube LinkedIn Whatsapp Teams|
| **Motivações**| **Frustrações**| **Hobbies e História** |
|Ajudar os clientes a alcançarem os melhores resultados. Deixar seu trabalho e seus projetos o mais visível possível.|Se sente desconfortável em usar um aplicativo que não tenha a informação de quem participou do desenvolvimento.|Paintball com os amigos. Gosta de frequentar restaurantes elegantes. Comidas apimentadas. |


## Histórias de Usuários

Registramos as histórias das personas encontradas para o projeto e analisamos suas histórias. 

| EU COMO... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE` | PARA ... `MOTIVO/VALOR`                |
| -------------------- | ---------------------------------- | -------------------------------------- |
|**Maria Helen**| Quero ver o percentual de ocupação do restaurante. | Não gosto de lugares cheios.|
|**Maria Helen**| Quero ver o cardápio do restaurante.| Gosto de já chegar com o pedido em mente.|
|**Maria Helen**| Ter uma forma de comunicar com o restaurante sem precisar ligar ou ir até ele. |Economizar tempo de espera em uma ligação e sanar dúvidas antes de chegar no local.|
|**Fabrício Ferreira**| Poder dar nota ao atendimento, refeição e espera. |Poder escolher baseado em opiniões.|
|**Fabrício Ferreira**|Ter informações do restaurante, como endereço, número, ponto de referência.  |Não perder tempo procurando o restaurante.|
|**Fabrício Ferreira**|Fazer reservas online.  | Não é sempre que posso entrar em contato para reservar pelo celular.|
|**Vitor Andrade**| Desejo que na página do aplicativo tenha o contato social dos desenvolvedores.|Para poder comunica-los sobre um possível erro crítico no sistema.|
|**Tereza Santos**|Desejo que eu possa alterar o tamanho da fonte no site.   |Para poder ler sem forçar as vistas ou ter que usar óculos.|
|**Vitor Andrade**| Desejo poder cadastrar e logar uma conta.|Para ter acesso a todo o conteúdo do site.|
|**Vitor Andrade**| Desejo que tenha uma página onde eu possa redefinir a minha senha.|Para caso a esqueça.|


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| **ID**     | **Descrição do Requisito**                  | **Prioridade** |
| ------ | --------------------------------------- | ---------- |
| **RF-001** | O site deve apresentar de forma clara o cardápio e formas de pagamentos dos restaurantes. | ALTA |
| **RF-002** | O site deve apresentar, para cada restaurante, o seu endereço.   | ALTA  |
| **RF-003** | O site deve permitir ao usuário visualizar o tempo de espera e as reservas que podem ser feitas no dia | ALTA |
| **RF-004** | O site deve oferecer ao usuário entrar na fila online ou fazer uma reserva quando o restaurante disponibilizar esse serviço.    | BAIXA |
| **RF-005**| O site deve oferecer uma forma de pesquisa para localidades dos restaurantes. | MÉDIA |
| **RF-006** | O site deve permitir que o usuário encontre a melhor opção de restaurante por sua localidade, formas de pagamento ou produtos presentes no menu utilizando uma ferramenta de filtro.    | MEDIA      |
| **RF-007** | Deve ser disponibilizado uma barra de busca, para ser encontrado algum restaurante em específico.  | ALTA      |
| **RF-008** | O site deve apresentar um menu de categorias, para categorizar os restaurantes de acordo com o tipo de comida que é servido.   | BAIXA    |
| **RF-009** | O site deve permitir que o cliente tenha meios de contato direto com os restaurantes escolhidos (janela de chat).  |BAIXA   |
| **RF-010** | O site deve permitir que usuários possam dar avaliações sobre os restaurantes. | MÉDIA  |
| **RF-011** | O site deve permitir que o usuário possa alterar o tamanho da fonte.  | ALTA       |
| **RF-012** |O site deve ter uma página de contato com a empresa BREF.  |ALTA|
| **RF-013** |O site deve ter uma página para entrar em uma conta ou cadastrar.  |ALTA|
| **RF-014** |O site deve ter uma página para redefinição de senha.  |ALTA|

### Requisitos não Funcionais

| **ID**      | **Descrição do Requisito**                                            | **Prioridade** |
| ------- | ----------------------------------------------------------------- | ---------- |
| **RNF-001** | O site deverá ser responsivo permitindo a visualização em um celular de forma adequada.|MEDIA|
| **RNF-003** | O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge, Opera GX).|ALTA|
| **RNF-004** | O site deve ser publicado em um ambiente acessível publicamente na Internet (GitHub Pages, Heroku). | ALTA|
| **RNF-005** | O site de ter seu código-fonte disponível em alguma plataforma pública de acesso (Github, Gitbucket, Gitlab) com a licença de uso Creative Commons ou MIT.|ALTA|

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| **ID**  | **Restrição**                                    |
| --- | ----------------------------------------------------- |
| 01  | Não se pode utilizar banco de dados, apenas JSON ou CSV. | Alta |
| 02  | O projeto completo deve ser entregue no dia 26/06/2022. | Alta |
| 03  | A equipe não pode terceirizar o desenvolvimento do projeto. | Alta |
| 04  | A equipe somente deve utilizar as linguagens HTML, CSS e JS. | Alta |

