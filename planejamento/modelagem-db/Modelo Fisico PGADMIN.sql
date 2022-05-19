CREATE DATABASE "SupermercadoSQ"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;


-- CRIACAO DA TABLE PERFIL_ACESSO

CREATE TABLE IF NOT EXISTS public.perfil_acesso
(
    cod_perfil_acesso smallint NOT NULL,
    nome_perfil character varying(32) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT perfil_acesso_pkey PRIMARY KEY (cod_perfil_acesso)
)

TABLESPACE pg_default;

ALTER TABLE public.perfil_acesso
    OWNER to postgres;




-- CRIACAO DA TABLE USUARIO

CREATE TABLE IF NOT EXISTS public.usuario
(
    cod_usuario integer NOT NULL,
    username character varying(32) COLLATE pg_catalog."default" NOT NULL,
    email character varying(64) COLLATE pg_catalog."default" NOT NULL,
    senha character(64) COLLATE pg_catalog."default" NOT NULL,
    nome character varying(64) COLLATE pg_catalog."default" NOT NULL,
    telefone character varying(32) COLLATE pg_catalog."default",
    documento character varying(64) COLLATE pg_catalog."default",
    ativo boolean NOT NULL,
    cod_perfil_acesso smallint NOT NULL,
    CONSTRAINT usuario_pkey PRIMARY KEY (cod_usuario),
    CONSTRAINT usuario_username_email_documento_key UNIQUE (username, email, documento),
    CONSTRAINT usuario_cod_perfil_acesso_fkey FOREIGN KEY (cod_perfil_acesso)
        REFERENCES public.perfil_acesso (cod_perfil_acesso) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.usuario
    OWNER to postgres;



-- CRIACAO DA TABLE PRODUTO

CREATE TABLE IF NOT EXISTS public.produto
(
    cod_produto integer NOT NULL,
    nome character varying(64) COLLATE pg_catalog."default" NOT NULL,
    marca character varying(64) COLLATE pg_catalog."default",
    ingredientes character varying(256) COLLATE pg_catalog."default",
    img_produto bytea,
    img_tabela_nutricional bytea,
    cod_usuario integer NOT NULL,
    CONSTRAINT produto_pkey PRIMARY KEY (cod_produto),
    CONSTRAINT produto_cod_usuario_fkey FOREIGN KEY (cod_usuario)
        REFERENCES public.usuario (cod_usuario) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.produto
    OWNER to postgres;



-- CRIACAO DA TABLE RESTRICAO

CREATE TABLE IF NOT EXISTS public.restricao
(
    cod_restricao integer NOT NULL,
    nome_restricao character varying(64) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT restricao_pkey PRIMARY KEY (cod_restricao)
)

TABLESPACE pg_default;

ALTER TABLE public.restricao
    OWNER to postgres;


-- CRIACAO DA TABLE PRODUTO_RESTRICAO

CREATE TABLE IF NOT EXISTS public.produto_restricao
(
    cod_produto integer NOT NULL,
    cod_restricao integer NOT NULL,
    CONSTRAINT produto_restricao_cod_produto_fkey FOREIGN KEY (cod_produto)
        REFERENCES public.produto (cod_produto) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT produto_restricao_cod_restricao_fkey FOREIGN KEY (cod_restricao)
        REFERENCES public.restricao (cod_restricao) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.produto_restricao
    OWNER to postgres;

