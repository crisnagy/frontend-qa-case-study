## Bug: Uso incorreto de preload de recursos sem atributo "as"

### Severidade
Low

### Descrição
A aplicação utiliza <link rel="preload"> sem especificar o atributo obrigatório as, gerando warning no console do navegador

### Passos para reprodução
1. Acessar a aplicação
2. Abrir DevTools
3. Verificar aba console

### Resultado esperado
Recursos preload devem conter atributo as válido

### Resultado atual
Warning exibido no console indicando uso incorreto

### Impacto
Pode afetar otimização de carregamento e indica possível configuração incorreta de build

### Ambiente
- Browser: Chrome
- Resolução: Qualquer

### Evidência
- [Screenshot from 2026-04-15 19-34-12.png](../evidences/Screenshot%20from%202026-04-15%2019-34-12.png)

### Observações
-
