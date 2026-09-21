-- Migration inicial do projeto Almoxarifado.
-- Cada squad adiciona sua(s) tabela(s) em migrations numeradas em sequência
-- (V2__..., V3__...), nunca editando uma migration já commitada.
--
-- Sugestão de ordem (ver /docs no board do Trello):
--   V2 - setor, usuario
--   V3 - categoria, item, fornecedor
--   V4 - solicitacao, movimentacao

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
