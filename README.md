# CRIANDO API

## O QUE É UMA API - APLICATION PROGRAMMING INTERFACE

Trata-se de uma interface que inclui métodos para acessar, modificar e gerenciar dados.

Imagine que você tem uma aplicação enorme. Um sistema que tem vários usuários e suas respectivas informações. A API cuidará justamente da forma que esses dados poderão ser modificados, listados e excluídos. Para tal ela informa o padrão para o realizar. Sendo através dos métodos HTTP: GET | PUT | POST | DELETE | e entre outros. Isto quando nos referimos a API WEBs

## ENDPOINTS

Também temos os famosos <b>endpoins</b>, esses que são urls específicas que representa uma operação disponível na API, veja algunas exemplos abaixos:

* GET - Lista informações;
* POST - Cria informações
* PUT - Atualiza informações;
* DELETE - Remove uma informação

<b>EXEMPLO PRÁTICO</b>
imagine que você tenha um sistema, com os seguintes endpoints

* GET ``api/usuarios`` -> você terá uma lista de usuários;
* GET ``api/usuarios/{id}`` -> obtém detalhes de um usuário através do seu ID;
* POST ``api/usuarios`` -> adiciona um novo usuário;
* PUT ``api/usuarios/{id}`` -> modifica um usuário específico através do ID;
* DELTE ``api/usuarios/{id}`` -> deleta um usuário através do ID.



