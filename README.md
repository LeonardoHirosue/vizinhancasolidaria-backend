# Cadastro de Usuário

**Requisitos Funcionais**
Qualquer pessoa poderá se cadastrar no sistema
Deve ser possível atualizar o avatar após o cadastro

**Requisitos Não Funcionais**

**Regra de Negócio**
O usuário é cadastrado como status de "não identificado" por padrão.
O cadastro do usuário deverá ser aprovado pelo usuário Tutor do grupo.
Após a aprovação do cadastro o status do usuário passa a ser de "morador". 

# Realizar Login

# Recuperar Senha

**Requisitos Funcionais**
Deve ser possível redefinir uma senha pelo e-mail.

# Visualizar Informações de Perfil

# Realizar Logout

# Visualizar Mural Informativo

# Gerenciar Notificações

## Cadastro de Notificações

**Requisitos Funcionais**
Deve ser possível cadastrar novas notificações.

**Requisitos Não Funcionais**

**Regra de Negócio**
Não deve ser possível cadastrar uma notificação inexistente na tabela de tipos de notificação
Todos os usuários, exceto os "não identificados", poderão cadastrar uma notificação.

## Listagem de Notificações

**Requisitos Funcionais**
Deve ser possível listar todas as notificações pelo status.

# Gerenciar Tipos Notificações

**Requisitos Funcionais**
Deve ser possível cadastrar um novo tipo de notificação;

**Requisitos Não Funcionais**

**Regra de Negócio**
O cadastro de novos tipos de notificações deverá ser realizado apenas pelo usuário Admin diretamente no banco de dados.



# Gerenciar Veículos

## Cadastro de Veículos
**Requisitos Funcionais**
Deve ser possível cadastrar um novo veículo

**Requisitos Não Funcionais**

**Regra de Negócio**
Não deve ser possível cadastrar um veículo com uma placa já existente.
Não deve ser possível alterar a placa de um veículo já cadastrado.

## Listagem de veículos

**Requisitos Funcionais**
Deve ser possível listar todos os carros disponível para verificação de uma notificação de veículo suspeito.

**Requisitos Não Funcionais**

**Regra de Negócio**
A varificação de veículo suspeito deverá ser realizada automaticamente pelo próprio sistema.

# Gerenciamento de PETs

**Requisitos Funcionais**
Deve ser possível cadastrar a imagem do PET

**Requisitos Não Funcionais**
Utilizar o multer para upload de arquivos.

# Gerenciamento de Visitas

**Requisitos Funcionais**
Deve ser possível cadastrar temporariamente visitantes
Deve ser possível cadastrar veículos de visitantes
Deve ser possível cadastrar prestadores de serviços
Deve ser possível cadastrar veículos de prestadores de veículos 
