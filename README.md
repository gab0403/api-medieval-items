# Projeto Trybesmith

## O que foi desenvolvido

  Este projeto simula uma loja de itens medievais, no formato de uma _API_, utilizando _Typescript_.
  
  Foram desenvolvidas todas as camadas da aplicação (_Models_, _Service_ e _Controllers_) e por meio dessa aplicação, é possível realizar as operações básicas que se pode fazer em um determinado banco de dados:
  Criação, Leitura, Atualização e Exclusão (ou `CRUD`, para as pessoas mais íntimas 😜 - _Create, Read, Update_ e _Delete_).

  Foram criados alguns _endpoints_ que podem ler e escrever no banco de dados, utilizando **MySQL**.

  ---

## Tabelas

  O banco tem três tabelas: pessoas usuárias, produtos e pedidos.

  ```sql
  DROP SCHEMA IF EXISTS Trybesmith;
  CREATE SCHEMA Trybesmith;

  CREATE TABLE Trybesmith.Users (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    username TEXT NOT NULL,
    classe TEXT NOT NULL,
    level INTEGER NOT NULL,
    password TEXT NOT NULL
  );

  CREATE TABLE Trybesmith.Orders (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    userId INTEGER,
    FOREIGN KEY (userId) REFERENCES Trybesmith.Users (id)
  );

  CREATE TABLE Trybesmith.Products (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    amount TEXT NOT NULL,
    orderId INTEGER,
    FOREIGN KEY (orderId) REFERENCES Trybesmith.Orders (id)
  );
  ```

---

## Tecnologias utilizadas: 

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![poo](https://img.shields.io/badge/-POO-orange?style=for-the-badge&logo=poo&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

