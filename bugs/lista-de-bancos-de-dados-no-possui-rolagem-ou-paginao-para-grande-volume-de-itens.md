## Bug: Lista de bancos de dados não possui rolagem ou paginação para grande volume de itens

### Severidade
Medium

### Descrição
Ao criar múltiplos bancos de dados (mais de 20), a interface não apresenta rolagem ou paginação, dificultando a visualização e interação com os itens

### Passos para reprodução
1. Acessar a área de "Bancos de dados"
2. Criar múltiplos registros (20+)
3. Observar a lista

### Resultado esperado
A lista deve suportar rolagem ou paginação para permitir navegação entre os itens

### Resultado atual
Não há rolagem ou paginação, limitando a visualização

### Impacto
Dificulta a navegação e gerenciamento dos dados em cenários com grande volume

### Ambiente
- Browser: Chrome
- Resolução: Qualquer

### Evidência
- [Screenshot from 2026-04-16 13-35-25.png](../evidences/Screenshot%20from%202026-04-16%2013-35-25.png)

### Observações
Problema relacionado à escalabilidade da interface
