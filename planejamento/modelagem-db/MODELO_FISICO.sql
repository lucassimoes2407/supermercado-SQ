CREATE DATABASE supermercado_sq;


\c supermercado_sq


CREATE TABLE perfil_acesso (
    cod_perfil_acesso SERIAL PRIMARY KEY,
    descricao VARCHAR(64) NOT NULL
);

CREATE TABLE usuario (
    cod_usuario SERIAL PRIMARY KEY,
    username VARCHAR(64) NOT NULL UNIQUE,
    email VARCHAR(64) NOT NULL UNIQUE,
    senha VARCHAR(64) NOT NULL,
    ativo BOOLEAN NOT NULL,
    nome VARCHAR(128) NOT NULL,
    documento VARCHAR(32) UNIQUE,
    telefone VARCHAR(32),
    cod_perfil_acesso INT NOT NULL REFERENCES perfil_acesso(cod_perfil_acesso)    
);

CREATE TABLE produto (
    cod_produto SERIAL PRIMARY KEY,
    nome VARCHAR(64) NOT NULL,
    marca VARCHAR(64),
    ingredientes TEXT NOT NULL,
    img_produto BYTEA,
    img_tabela_nutricional BYTEA,
    cod_usuario INT NOT NULL REFERENCES usuario(cod_usuario)
);

CREATE TABLE restricao (
    cod_restricao SERIAL PRIMARY KEY,
    nome_resticao VARCHAR(64) NOT NULL
);

CREATE TABLE produto_restricao (
    cod_produto INT NOT NULL REFERENCES produto(cod_produto),
    cod_restricao INT NOT NULL REFERENCES restricao(cod_restricao)
);
