## Bug: Menu lateral não colapsa e apresenta estado inconsistente após refresh

### Severidade
Medium

### Descrição
O botão do menu lateral abre corretamente o menu, porém não permite colapsar ao clicar novamente. Após atualização da página (F5), o botão muda de estado visual (fica verde), indicando possível inconsistência de estado

### Passos para reprodução
1. Realizar login na aplicação
2. Clicar no botão do menu lateral (lado esquerdo)
3. Observar abertura do menu
4. Clicar novamente no botão
5. Atualizar a página (F5)

### Resultado esperado
Botão deve alternar entre abrir e fechar o menu e Estado visual deve permanecer consistente após refresh

### Resultado atual
Menu abre, mas não fecha ao clicar novamente e após refresh, botão apresenta mudança de estado visual (fica verde)

### Impacto
Comportamento inconsistente do menu pode confundir o usuário e comprometer navegação

### Ambiente
- Browser: Chrome
- Resolução: Qualquer

### Evidência
- [Screenshot from 2026-04-15 19-59-38.png](../evidences/Screenshot%20from%202026-04-15%2019-59-38.png)

### Observações
Possível problema de controle de estado (toggle não implementado corretamente ou estado persistido incorretamente no frontend)
