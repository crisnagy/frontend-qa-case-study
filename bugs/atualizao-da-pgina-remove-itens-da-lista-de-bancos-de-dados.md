## Bug: Atualização da página remove itens da lista de bancos de dados

### Severidade
High

### Descrição
Ao atualizar a página (F5) ou utilizar o botão de refresh, os itens da lista de bancos de dados são removidos

### Passos para reprodução
1. Acessar a área de "Bancos de dados"
2. Verificar itens exibidos na lista
3. Atualizar a página (F5) ou clicar no botão de refresh
4. Observar a lista

### Resultado esperado
Itens devem permanecer listados após atualização da página

### Resultado atual
Lista é esvaziada após refresh

### Impacto
Perda de dados visível para o usuário, comprometendo confiabilidade do sistema

### Ambiente
- Browser: Chrome
- Resolução: Qualquer

### Evidência
- [Screenshot from 2026-04-15 20-38-00.png](../evidences/Screenshot%20from%202026-04-15%2020-38-00.png)

### Observações
Possível ausência de persistência ou falha na reidratação do estado após atualização
