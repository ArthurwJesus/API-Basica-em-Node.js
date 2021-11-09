CREATE DATABASE Apidados;

CREATE TABLE personagens (
codigo int,
nome varchar(30) NOT NULL,
apelido varchar(30),
idade int,
vida varchar(50),
tipo varchar(50),
associacao1 varchar(50),
associacao2 varchar(50),
status varchar(50),
PRIMARY KEY (codigo)
);

INSERT  INTO personagens Values (1,'Antonio Pontevedra','Balu',44,'75','Combatente','Ordem Realitas','Equipe Abutres','Vivo');
INSERT  INTO personagens Values (2,'Dante','Gaspar',28,'55','Ocultista','Ordem Realitas','Equipe Abutres','Vivo');
