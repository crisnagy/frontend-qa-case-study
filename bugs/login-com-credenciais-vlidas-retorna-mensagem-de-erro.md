## Bug: Login com credenciais válidas retorna mensagem de erro

### Severidade
High

### Descrição
Ao realizar login com credenciais fornecidas (qa@test.com

### Passos para reprodução
1. Acessar a página de login
2. Inserir credenciais validas
3. Clicar em entrar

### Resultado esperado
Usuário deve ser autenticado e redirecionado para área logada

### Resultado atual
Sistema exibe mensagem "Seu login está incorreto, quer continuar?"

### Impacto
Impossibilita acesso ao sistema com credenciais válidas/Causa confusão

### Ambiente
- Browser: Chrome
- Resolução: Qualquer

### Evidência
- [Screenshot from 2026-04-15 19-47-52.png](../evidences/Screenshot%20from%202026-04-15%2019-47-52.png)

### Observações
Possível falha na validação backend ou erro de integração entre frontend e backend
