## Bug: Rotas protegidas acessíveis sem autenticação

### Severidade
High

### Descrição
A aplicação permite acesso direto a rotas internas (ex: /dashboard) sem necessidade de autenticação, mesmo em sessão anônima

### Passos para reprodução
1. Abrir uma aba anônima do navegador
2. Acessar diretamente a URL + /dashboard
3. Observar comportamento da aplicação

### Resultado esperado
Usuário não autenticado deve ser redirecionado para a tela de login

### Resultado atual
Acesso à rota é permitido sem autenticação

### Impacto
Falha de segurança que permite acesso não autorizado a áreas internas da aplicação

### Ambiente
- Browser: Chrome
- Resolução: Qualquer

### Evidência
Sem evidência visual disponível. Comportamento validado por observação funcional durante teste exploratório.

### Observações
Indica ausência de proteção de rotas no frontend e/ou validação de sessão no backend
