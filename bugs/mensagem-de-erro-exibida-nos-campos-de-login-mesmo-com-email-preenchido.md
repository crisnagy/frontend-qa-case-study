## Bug: Mensagem de erro exibida nos campos de login mesmo com email preenchido

### Severidade
Medium

### Descrição
Mensagem "Usuário ou senha inválidos" é exibida nos campos de email e senha simultaneamente, mesmo com o campo de email preenchido corretamente

### Passos para reprodução
1. Acessar a página de login
2. Inserir email válido (qa@test.com
3. Inserir senha inválida
4. Clicar em "Entrar"

### Resultado esperado
Mensagem de erro exibida de forma global ou associada corretamente ao campo relevante

### Resultado atual
Mensagem exibida em ambos os campos simultaneamente

### Impacto
Confunde o usuário e dificulta identificação do erro

### Ambiente
- Browser: Chrome
- Resolução: Indifere

### Evidência
- [Screenshot from 2026-04-15 19-26-16.png](../evidences/Screenshot%20from%202026-04-15%2019-26-16.png)

### Observações
Possível erro de binding entre validação backend e renderização frontend
