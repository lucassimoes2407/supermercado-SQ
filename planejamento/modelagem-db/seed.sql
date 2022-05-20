insert into perfil_acesso values
(1, 'USUARIO'),
(2, 'ADMINISTRADOR'),
(3, 'FORNECEDOR');

insert into usuario values
(1, 'claudinho', 'claudinho@gmail.com', 'RfeR32', true, 'Claudio', '85993', '00000000000', 1),
(2, 'heliosgod', 'heliosgod13@gmail.com', 'qewInfR33', true, 'Helio', '8599284719', '11111111111', 2),
(3, 'msnAragao', 'msn_aragao@gmail.com', 'pJ9GF4jD', true, 'Marcelo', '8899472859', '22222222222', 3),
(4, 'leite_ju', 'juliana_leite@hotmail.com', '@@dI8Y66', false, 'Juliana', '7892742823', '2009837812', 1),
(5, 'mouse.http', 'mouse_felix@hotmail.com', 'E87Jf7n2', true, 'Marcelo', '899917462763', '0000000000', 1),
(6, 'jonas_marinho', 'marinho_jonas@hotmail.com', '23JOK9fr&', true, 'Jonas Marinho', '85994726471', '11111111111', 1),
(7, 'flavinha123', 'flaviasouza@gmail.com', '09PloI25!d', false, 'Flavia de Souza', '85992648163', '22222222222', 1),
(8, 'dudanunes', 'duda_nunes12@hotmail.com', 'SwoiN8V6', true, 'Eduarda Nunes', '909928173', '33333333333', 1);

insert into restricao values
(1, 'AMENDOIM'),
(2, 'FRUTOS DO MAR'),
(3, 'LACTOSE'),
(4, 'GLUTEN'),
(5, 'SOJA'),
(6, 'ACUCAR'),
(7, 'NOZES'),
(8, 'MARISCOS'),
(9, 'PEIXES'),
(10, 'OVOS'),
(11, 'TRIGO'),
(12, 'AVEIA'),
(13, 'CEVADA');

insert into produto (cod_produto, nome, marca, ingredientes, cod_usuario) values
(1, 'LEITE EM PO 200G', 'ITAMBE', 'LEITE INTEGRAL; 
 VITAMINAS A, B, D E FERRO; EMULCIFICANTE LECITINA DE SOJA', 1),
(2, 'BISCOITO COM RECHEIO DE CHOCOLATE AMORI 140G', 'RICHESTER', 'Farinha de trigo enriquecida com ferro e 
 ácido fólico, açúcares, gordura vegetal, cacau, amido, sal, fermentos químicos: bicarbonato de amônio, 
 pirofosfato ácido de sódio e bicarbonato de sódio, corante caramelo IV, emulsificante lecitina de soja 
 e aromatizante.', 1),
 (3, 'PAO DE FORMA INTEGRAL 450G', 'WICKBOLD', 'Farinha de trigo integral (51%), farinha de trigo 
 enriquecida com ferro e ácido, fólico, glúten, fibra de trigo, açúcar, fermento biológico, óleo 
 de soja, sal e o conservador propionato de cálcio.', 8),
 (4, 'CREME DE LEITE EXTRA CREMOSO 280G', 'NESTLE', 'Creme de leite e estabilizante fosfato dissódico.', 6);

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