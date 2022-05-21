insert into perfil_acesso 
(descricao)
values
('USUARIO'),
('ADMINISTRADOR'),
('FORNECEDOR');

insert into usuario 
(username, email, senha, ativo, nome, documento, telefone, cod_perfil_acesso)
values
('claudinho', 'claudinho@gmail.com', 'RfeR32', true, 'Claudio', '85993', '00000000000', 1),
('heliosgod', 'heliosgod13@gmail.com', 'qewInfR33', true, 'Helio', '8599284719', '11111111111', 2),
('msnAragao', 'msn_aragao@gmail.com', 'pJ9GF4jD', true, 'Marcelo', '8899472859', '22222222222', 3),
('leite_ju', 'juliana_leite@hotmail.com', '@@dI8Y66', false, 'Juliana', '7892742823', '2009837812', 1),
('mouse.http', 'mouse_felix@hotmail.com', 'E87Jf7n2', true, 'Marcelo', '899917462763', '0000000000', 1),
('jonas_marinho', 'marinho_jonas@hotmail.com', '23JOK9fr&', true, 'Jonas Marinho', '85994726471', '11111111111', 1),
('flavinha123', 'flaviasouza@gmail.com', '09PloI25!d', false, 'Flavia de Souza', '85992648163', '22222222222', 1),
('dudanunes', 'duda_nunes12@hotmail.com', 'SwoiN8V6', true, 'Eduarda Nunes', '909928173', '33333333333', 1);

insert into restricao 
(nome_restricao)
values
('AMENDOIM'),
('FRUTOS DO MAR'),
('LACTOSE'),
('GLUTEN'),
('SOJA'),
('ACUCAR'),
('NOZES'),
('MARISCOS'),
('PEIXES'),
('OVOS'),
('TRIGO'),
('AVEIA'),
('CEVADA');

insert into produto 
(nome, marca, ingredientes, cod_usuario) 
values
('LEITE EM PO 200G', 'ITAMBE', 'LEITE INTEGRAL; VITAMINAS A, B, D E FERRO; EMULCIFICANTE LECITINA DE SOJA', 1),
('BISCOITO COM RECHEIO DE CHOCOLATE AMORI 140G', 'RICHESTER', 'Farinha de trigo enriquecida com ferro e ácido fólico, açúcares, gordura vegetal, cacau, amido, sal, fermentos químicos: bicarbonato de amônio, pirofosfato ácido de sódio e bicarbonato de sódio, corante caramelo IV, emulsificante lecitina de soja e aromatizante.', 1),
('PAO DE FORMA INTEGRAL 450G', 'WICKBOLD', 'Farinha de trigo integral (51%), farinha de trigo enriquecida com ferro e ácido, fólico, glúten, fibra de trigo, açúcar, fermento biológico, óleo de soja, sal e o conservador propionato de cálcio.', 8),
('CREME DE LEITE EXTRA CREMOSO 280G', 'NESTLE', 'Creme de leite e estabilizante fosfato dissódico.', 6);

insert into produto_restricao values
(1, 3),
(1, 5),
(2, 3),
(2, 4),
(2, 5),
(2, 11),
(2, 12),
(2, 13),
(3, 11),
(3, 4),
(3, 6),
(4, 3);
