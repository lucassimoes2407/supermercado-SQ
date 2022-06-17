
insert into usuario 
(username, email, senha, ativo, acesso)
values
('claudinho', 'claudinho@gmail.com', 'RfeR32', true, 'CLIENTE'),
('heliosgod', 'heliosgod13@gmail.com', 'qewInfR33', true, 'ADMIN'),
('msnAragao', 'msn_aragao@gmail.com', 'pJ9GF4jD', true, 'FORNECEDOR'),
('leite_ju', 'juliana_leite@hotmail.com', '@@dI8Y66', false, 'CLIENTE'),
('mouse.http', 'mouse_felix@hotmail.com', 'E87Jf7n2', true, 'CLIENTE'),
('jonas_marinho', 'marinho_jonas@hotmail.com', '23JOK9fr&', true, 'CLIENTE'),
('flavinha123', 'flaviasouza@gmail.com', '09PloI25!d', false, 'CLIENTE'),
('dudanunes', 'duda_nunes12@hotmail.com', 'SwoiN8V6', true, 'CLIENTE');

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

insert into usuario_restricao values
(1, 3),
(2, 5),
(2, 3),
(2, 4),
(3, 5),
(3, 11),
(4, 12),
(5, 13),
(6, 11),
(7, 4),
(7, 6),
(8, 3);