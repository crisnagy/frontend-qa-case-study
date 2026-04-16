## Bug: Responsividade quebra em resoluções menores

### Severidade
Medium

### Descrição
Layout da página de login apresenta quebra visual em resoluções menores, com elementos desalinhados e/ou cortados

### Passos para reprodução
1. Acessar a página de login
2. Abrir DevTools
3. Alterar para resolução mobile (ex: 375x667)
4. Observar o layout

### Resultado esperado
Layout adaptado corretamente para telas menores, sem sobreposição ou corte de elementos

### Resultado atual
Elementos ficam desalinhados e/ou cortados

### Impacto
Compromete a usabilidade em dispositivos móveis

### Ambiente
- Browser: Chrome
- Resolução: 375x677 (uma delas)

### Evidência
- [Screenshot from 2026-04-15 19-15-20.png](../evidences/Screenshot%20from%202026-04-15%2019-15-20.png)

### Observações
Possível ausência ou falha em regras de CSS responsivo
