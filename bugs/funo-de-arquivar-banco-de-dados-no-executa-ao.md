## Bug: Função de arquivar banco de dados não executa ação

### Severidade
Medium

### Descrição
Ao clicar no ícone de arquivar (ícone de caixa) na listagem de bancos de dados, nenhuma ação é executada

### Passos para reprodução
1. Acessar a área de "Bancos de dados"
2. Localizar um item na lista
3. Clicar no ícone de arquivar (ícone de caixa)

### Resultado esperado
Item deve ser arquivado ou movido para estado correspondente

### Resultado atual
O item some ao clicar no icone

### Impacto
Usuário não consegue gerenciar itens da lista (arquivar registros)

### Ambiente
- Browser: Chrome
- Resolução: Qualquer

### Evidência
- [Screenshot from 2026-04-15 20-38-00.png](../evidences/Screenshot%20from%202026-04-15%2020-38-00.png)

### Observações
Possível ausência de binding de evento ou função não implementada
