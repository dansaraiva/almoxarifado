# Almoxarifado API

Sistema de controle de estoque do almoxarifado de uma escola, exposto como REST API em Java + Spring Boot.

## Stack

- Java 21 + Spring Boot 3.3
- Spring Web, Spring Data JPA, Spring Security + JWT
- PostgreSQL + Flyway
- springdoc-openapi (Swagger em `/docs`)
- JUnit 5 + Mockito

## Como rodar localmente

Pré-requisitos: JDK 21, Maven 3.9+, Docker e Docker Compose.

```bash
# 1. Subir o banco de dados
docker compose up -d db

# 2. Rodar a aplicação
mvn spring-boot:run
```

Dica: rode `mvn -N wrapper:wrapper` uma vez para gerar o Maven Wrapper (`mvnw`/`mvnw.cmd`) e não depender do Maven instalado na máquina de cada um.

A API sobe em `http://localhost:8080`. Documentação Swagger em `http://localhost:8080/docs`.

Para subir tudo (app + banco) via Docker:

```bash
docker compose up --build
```

## Estrutura de pacotes

```
com.escola.almoxarifado
├── config              → Security, Swagger, CORS, beans gerais
├── common
│   ├── exception        → exceções customizadas + @ControllerAdvice
│   ├── audit             → auditoria (quem fez o quê)
│   └── dto               → DTOs genéricos (PageResponse, ErrorResponse)
├── security
│   ├── jwt
│   └── usuario           → autenticação/autorização
├── usuario               → CRUD de usuários e perfis
├── setor                 → setores/departamentos da escola
├── fornecedor
├── categoria
├── item                   → itens de estoque
├── movimentacao           → entrada/saída de estoque
├── solicitacao            → fluxo de solicitação → aprovação → saída
└── relatorio              → endpoints de relatórios/consultas agregadas
```

Cada pacote de domínio contém: entidade, `XController`, `XService`, `XRepository`, DTOs de request/response e `XMapper`.

## Migrations

Migrations Flyway em `src/main/resources/db/migration`, numeradas em sequência (`V1__`, `V2__`...). Nunca edite uma migration já commitada na branch principal — crie uma nova.

## Fluxo de trabalho

- `main` sempre estável e buildável.
- Uma branch por card do Trello: `feature/<nome-curto-da-tarefa>` (ex.: `feature/entidade-item`).
- Pull request para `main` com pelo menos 1 revisão de outro integrante antes do merge.
- Commits pequenos e descritivos (ex.: `feat: adiciona endpoint de criação de item`).

## Documentação completa

Regras de negócio, requisitos funcionais/não funcionais, modelo de entidades e decisão de arquitetura estão no documento do projeto (Claude Docs) e no board do Trello.
