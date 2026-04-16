## Bug: Flickering visual na imagem da tela inicial ao atualizar a página

### Severidade
Low

### Descrição
Ao atualizar a página inicial (F5), a imagem principal apresenta comportamento de “flickering” (tremor/oscilação visual) durante o carregamento

### Passos para reprodução
1. Acessar a página inicial
2. Pressionar F5 para atualizar
3. Observar a imagem principal durante o carregamento

### Resultado esperado
A imagem deve carregar de forma estável, sem oscilações visuais

### Resultado atual
A imagem apresenta flickering durante o reload

### Impacto
Degrada a experiência visual do usuário, especialmente em carregamentos frequentes

### Ambiente
- Browser: Chrome
- Resolução: Qualquer

### Evidência
Sem evidencia visual disponivel. Comportamento validado por observacao funcional durante teste exploratorio.

### Observações
Possível re-renderização ou ausência de tratamento adequado de loading/estilos durante a montagem da página
