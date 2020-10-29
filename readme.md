# TDD (Test Driven Development)

<h1>teste</h1>
<img src=""/>
<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=softwaredotcom.swdc-vscode">
    <img alt="Githu" src="https://vsmarketplacebadge.apphb.com/version-short/softwaredotcom.swdc-vscode.svg"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=softwaredotcom.swdc-vscode">
    <img alt="Installs" src="https://vsmarketplacebadge.apphb.com/installs-short/softwaredotcom.swdc-vscode.svg"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=softwaredotcom.swdc-vscode">
    <img alt="Rating" src="https://vsmarketplacebadge.apphb.com/rating-short/softwaredotcom.swdc-vscode.svg"></a>
  <a href="https://aka.ms/vsls">
    <img alt="Live Share enabled" src="https://aka.ms/vsls-badge"></a>
</p>

# Recuperação de senha

**RF** funcionalidades no sistema

-   O usuário deve poder recuperar sua senha informando o seu e-mail;
-   O usuário deve receber um e-mail com as instruções de recuperação de senha;
-   O usuário deve poder resetar sua senha;

**RNF** não ligada a funcionalidade do sistema.

-   Utilizar mailtrap.io para testar envios em ambiente de dev;
-   Utilizar Amazon SES para envios em produção;
-   O envio de e-mails deve acontecer em segundo plano(background Job)

**RN** regras de negócio

-   O link enviado por email para resetar senha, deve expirar em 2h;
-   O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização de perfil

**RF** funcionalidades no sistema

-   O usuário deve poder atualizar seu nome, email e senha;

**RN** regras de negócio

-   O usuário não pode alterar seu email para um email já utilizado;
-   Para atualizar sua senha, o usuário deve informar a senha antiga;
-   Para atualizar sua senha, o usuário deve informarr a nova senha;

# painel do prestador

**RF** funcionalidades no sistema

-   O usuário de poder listar seus agendamentos de um dia específico;
-   O Prestador deve receber uma notificação sempre que houver um novo agendamento;
-   O prestador deve poder visualizar as notificações não lidas;

**RNF**

-   Os agendamentos do prestador no dia devem ser armazenados em cache;
-   As notificações do prestador devem ser armazenadas no MongoDB;
-   As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN** regras de negócio

-   A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# agendamento de serviços

**RF** funcionalidades no sistema

-   O usuário deve poder listar todos prestadores de serviço cadastrados;
-   O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
-   O usuário deve poder listar horários disponiveis em um dia específico de um prestador;
-   O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

-   A listagem de prestadores deve ser armazenada em cache;

**RN** regras de negócio

-   Cada agendamento deve durar 1h exatamente;
-   Os agendamenetos devem estar diponiveis entre 8h às 18h (Primeiro às 8h, ùltimo às 17h);
-   O Usuário não pode agendar em um horário já ocupado;
-   O usuário não pode agendar em um horário que já passou;
-   O usuário não pode agendar serviço consigo mesmo;

<!-- "@typescript-eslint/interface-name-prefix":["error",{"prefixWithI":"always"}], -->
