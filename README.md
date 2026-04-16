# Frontend QA Case Study

Este repositório contém a análise exploratória realizada sobre uma aplicação web com comportamentos propositalmente inconsistentes, conforme descrito no desafio técnico.

## Objetivo

Explorar o sistema, identificar falhas e documentar comportamentos inesperados com clareza, incluindo:

- Cenários de reprodução
- Resultado esperado vs. atual
- Classificação de severidade

---

## Escopo e limitações

- Escopo: teste exploratório manual orientado a fluxos críticos de autenticação, navegação, estado de tela, validações e responsividade.
- Limitação: não houve automação de testes neste desafio.
- Limitação: os resultados refletem o comportamento observado no período da execução do case.

---

## Abordagem de teste

- Navegação por jornadas principais e cenários alternativos.
- Validação de regras de entrada (campos e feedbacks de erro).
- Verificação de persistência de estado após refresh.
- Inspeção de comportamento em resoluções menores.
- Registro de evidências e classificação por severidade.

---

## Ambiente de execução

- Sistema operacional: Linux
- Navegador principal: Chrome
- Resoluções: desktop e mobile (incluindo 375x667)

---

## Resumo quantitativo

- Total de bugs: 16
- High: 3
- Medium: 10
- Low: 3

Observação: 1 item de severidade Low é um teste de execução do script ([bugs/teste-do-script.md](./bugs/teste-do-script.md)).
Total de bugs funcionais encontrados na análise exploratória: 15.

Dados sincronizados com o índice em [bugs/index.md](./bugs/index.md).

---

## Principais achados

Durante a análise, foram identificados problemas relevantes em diferentes camadas da aplicação:

### Críticos
- Rotas protegidas acessíveis sem autenticação
- Login com comportamento inconsistente
- Perda de dados ao atualizar a página

### Relevantes
- Funcionalidades não implementadas (ex: arquivar, recuperação de senha)
- Problemas de navegação e estado (menu, telas em branco)
- Ausência de validação adequada em inputs

### Menores
- Problemas visuais e de responsividade
- Avisos técnicos no console

---

## Relatório de bugs

Veja o índice completo de bugs em:

[Ver índice de bugs](./bugs/index.md)

---

## Estrutura do projeto

- `bugs/`: documentação detalhada dos bugs encontrados
- `evidences/`: imagens e evidências dos problemas
- `tests/`: reservado para testes automatizados (não aplicados neste escopo)

---

## Execução local

Requisito único: Node.js instalado (não há dependências externas neste projeto).

Gerar novo report de bug:

```bash
npm run gen-bug
``` 

Atualizar o índice de bugs:

```bash
npm run gen-index
```