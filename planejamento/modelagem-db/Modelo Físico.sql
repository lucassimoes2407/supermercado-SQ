crate database super_sq;

use super_sq;

create table usuario
(cod_usuario int not null auto_increment,
username varchar(32),
nome varchar(64),
e_mail varchar(64) unique,
telefone varchar(16),
senha varchar(64),
ativo boolean,
cnpj char(14),
-- razao_social varchar(64),
-- nome_fantasia varchar(64),
tipo_conta char(1),
primary key(cod_usuario) on delete cascade
)






    