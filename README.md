## Requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js (v14+)
- MongoDB
- Yarn ou npm

## Configuração

1. **Clone o repositório**

   ```bash
   git clone https://github.com/jacondino/mes-gamefication-app.git
   cd mes-gamefication-app
   ```

## Para rodar o projeto

Certifique-se de ter o MongoDB instalado e executando localmente em:
mongodb://localhost:27017.

ou

Você pode ajustar a URL de conexão no arquivo src/database/database.module.ts

```bash
$ yarn install

```

e após

```bash

$ yarn start

```
### Uso da API

## Criar um Funcionário
Endpoint: POST /employees

Exemplo de Requisição:
```bash
POST http://localhost:3000/employees
Content-Type: application/json

{
  "name": "João Silva",
  "score": 15,
  "role": "Desenvolvedor"
}
```

## Atualizar um Funcionário
Endpoint: PUT /employees/:id

Exemplo de Requisição:
```bash
PUT http://localhost:3000/employees/ID_DO_FUNCIONARIO
Content-Type: application/json

{
  "name": "João Silva",
  "score": 25,
  "role": "Desenvolvedor"
}
```

## Buscar um Funcionário
Endpoint: GET /employees/:id

Exemplo de Requisição:
```bash
GET http://localhost:3000/employees/ID_DO_FUNCIONARIO
```
