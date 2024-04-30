# Projeto base, consumindo outra API

Uma simples API para pegar dados da previsão do tempo da cidade que você quer ou buscando pelo seu IP.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Faça o clone do repositório em sua máquina:
```
$ git clone https://github.com/MattiasGM/API-Previsao-do-tempo.git
```
### 📋 Pré-requisitos

<div><a href="https://insomnia.rest/download">Insomnia</a> - (ou outro Framework com a mesma finalidade)</div> 
<div><a href="https://nodejs.org/en">NodeJS</a></div><br>

Bibliotecas utilizadas:
```
Express
Axios
Cors
Dotenv
```

### 🔧 Instalação

```
$ npm init -y
```
```
$ npm i express
```
```
$ npm i axios
```
```
$ npm i cors
```
```
$ npm i dotenv
```

E configure o dotenv criando um arquivo ".env" na raiz do projeto

Após criar o arquivo escreva a chave da API, para obter a chave visite o site:

https://console.hgbrasil.com/keys

Após obter a chave, insira no arquivo .env:
```
KEY = "SUA-CHAVE"
```

Para iniciar o programa acesse a pasta "./src" pelo terminal e digite:
```
$ node index.js
```

Com o servidor rodando você pode utilizar o Insomnia para fazer as requisições utilizando as rotas padrões:

Para obter os dados da previsão do tempo pelo seu IP utilize a URL:
```
get - (http://localhost:3000/)
```
Para obter digitando a cidade que deseja encontrar utilize a URL:
```
get - (http://localhost:3000/temperatura?city_name=NOME_DA_CIDADE, SIGLA_DO_ESTADO)
```

Retorno esperado:

![image](https://github.com/MattiasGM/API-Previsao-do-tempo/assets/93679727/50e8f364-75fd-4de9-831a-7f21a0e9ed10)

## 📄 Licença

Este projeto está sob a licença (MIT) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.
