## Bug: Input do campo email gerando mensagem de erro sem terminar preenchimento(onChange/onBlur)

### Severidade
Medium

### Descrição
Ao começar a inserir o dado do email, na primeira letra, ja aparece a mensagem de erro

### Passos para reprodução
1. Acessar tela de login
2. Clicar no campo de email
3. Digitar apenas 1 caractere

### Resultado esperado
Validar apenas apos conclusão ou tentativa de envio

### Resultado atual
Mensagem de erro exibida imediatamente durante a digitação

### Impacto
Experiência do usuário prejudicada

### Ambiente
- Browser: Chrome
- Resolução: Qualquer

### Evidência
- [Screenshot from 2026-04-15 19-41-32.png](../evidences/Screenshot%20from%202026-04-15%2019-41-32.png)

### Observações
Possivel validação dispara onChange
