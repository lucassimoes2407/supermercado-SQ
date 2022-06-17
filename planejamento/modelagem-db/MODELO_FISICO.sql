CREATE DATABASE supermercado_sq;

\c supermercado_sq

CREATE TABLE IF NOT EXISTS usuario (
    username VARCHAR(64) NOT NULL UNIQUE,
    email VARCHAR(64) NOT NULL UNIQUE,
    senha VARCHAR(64) NOT NULL,
    ativo BOOLEAN NOT NULL,
    acesso SMALLINT NOT NULL,    
    cod_usuario SERIAL PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS produto (
    nome VARCHAR(64) NOT NULL,
    marca VARCHAR(64),
    ingredientes TEXT NOT NULL,
    img_produto VARCHAR(64),
    img_tabela_nutricional VARCHAR(64),
    cod_usuario INT NOT NULL REFERENCES usuario(cod_usuario),
    cod_produto SERIAL PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS restricao (
    nome_restricao VARCHAR(64) NOT NULL,
    cod_restricao SERIAL PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS produto_restricao (
    cod_produto INT NOT NULL REFERENCES produto(cod_produto),
    cod_restricao INT NOT NULL REFERENCES restricao(cod_restricao)
);

CREATE TABLE IF NOT EXISTS usuario_restricao (
    cod_usuario INT NOT NULL REFERENCES usuario(cod_usuario),
    cod_restricao INT NOT NULL REFERENCES restricao(cod_restricao)
);