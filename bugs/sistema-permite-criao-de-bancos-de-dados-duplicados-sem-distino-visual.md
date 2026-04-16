## Bug: Sistema permite criação de bancos de dados duplicados sem distinção visual

### Severidade
Medium

### Descrição
A aplicação permite criar múltiplos bancos de dados com o mesmo nome e sem qualquer diferenciação visual ou validação de unicidade

### Passos para reprodução
1. Acessar a área de "Bancos de dados"
2. Criar um banco de dados com nome (ex: "teste")
3. Repetir a criação utilizando o mesmo nome
4. Observar a listagem

### Resultado esperado
Sistema deve impedir duplicidade ou fornecer mecanismos de diferenciação entre registros (ex: ID, descrição, validação) e critica

### Resultado atual
Múltiplos registros com o mesmo nome são exibidos sem qualquer distinção visual

### Impacto
Dificulta a identificação e gerenciamento dos registros, podendo causar ambiguidade em ações como edição, exclusão ou arquivamento

### Ambiente
- Browser: Chrome
- Resolução: Qualquer

### Evidência
- [Screenshot from 2026-04-15 20-44-14.png](../evidences/Screenshot%20from%202026-04-15%2020-44-14.png)

### Observações
A ausência de validação e identificação única visível pode levar a inconsistência de uso e erros operacionais
