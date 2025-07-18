# banco-api-tests

Este projeto contém uma suíte de testes automatizados para a API REST disponível em [banco-api](https://github.com/juliodelimas/banco-api). Os testes são escritos em JavaScript e utilizam bibliotecas populares como Mocha, Chai e Supertest.

## Objetivo

Contribuir com a qualidade e o correto funcionamento dos endpoints da API REST do projeto `banco-api`, através de testes automatizados de integração.

## Stack utilizada

- **Linguagem:** JavaScript (Node.js)
- **Framework de Testes:** [Mocha](https://mochajs.org/)
- **Asserções:** [Chai](https://www.chaijs.com/)
- **Requisições HTTP:** [Supertest](https://github.com/ladjs/supertest)
- **Relatórios:** [Mochawesome](https://github.com/adamgruber/mochawesome)
- **Gerenciamento de variáveis de ambiente:** [dotenv](https://github.com/motdotla/dotenv)

## Estrutura de diretórios

```
banco-api-tests/
├── fixtures/                     # Dados de entrada simulados para os testes
│   ├── postLogin.json
│   └── postTransferencias.json
├── helpers/                      # Funções auxiliares utilizadas nos testes
│   └── autenticacao.js
├── mochawesome-report/          # Relatórios gerados automaticamente
│   ├── assets/
│   ├── mochawesome.html
│   └── mochawesome.json
├── node_modules/                # Dependências instaladas via npm
├── test/                        # Arquivos de teste automatizado
│   ├── login.test.js
│   └── transferencias.test.js
├── .env                         # Variáveis de ambiente (não versionado)
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Arquivo `.env`

O projeto requer um arquivo `.env` na raiz contendo a seguinte variável:

```env
BASE_URL=http://localhost:3000
```

Substitua http://localhost:3000 pela URL onde a API banco-api está rodando.
## Comandos

Instalar dependências:

```bash
npm install
```

Executar os testes:

```bash
npm test
```

Gerar e visualizar o relatório Mochawesome (após execução dos testes):

1. O relatório será salvo automaticamente no diretório `./mochawesome-report/`
2. Abra o arquivo `mochawesome.html` no navegador

## Documentações

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/ladjs/supertest)
- [Mochawesome](https://github.com/adamgruber/mochawesome)
- [Dotenv](https://github.com/motdotla/dotenv)
