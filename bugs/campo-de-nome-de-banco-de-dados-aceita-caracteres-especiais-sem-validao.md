## Bug: Campo de nome de banco de dados aceita caracteres especiais sem validação

### Severidade
Medium

### Descrição
A aplicação permite a criação de bancos de dados utilizando caracteres especiais no campo de nome, sem qualquer validação ou restrição definida

### Passos para reprodução
1. Acessar a área de "Bancos de dados"
2. Clicar em "Criar"
3. Inserir um nome contendo caracteres especiais (ex: db@#!, teste<>)
4. Confirmar a criação
5. Observar a listagem

### Resultado esperado
O sistema deve validar o campo de nome, restringindo caracteres inválidos ou definindo claramente as regras aceitas para entrada

### Resultado atual
O sistema aceita qualquer caractere especial sem validação ou feedback

### Impacto
Pode gerar inconsistências na identificação e manipulação dos registros, além de possíveis falhas em integrações ou operações futuras

### Ambiente
- Browser: Chrome
- Resolução: Qualquer

### Evidência
- [Screenshot from 2026-04-15 21-04-05.png](../evidences/Screenshot%20from%202026-04-15%2021-04-05.png)

### Observações
Não foram observadas falhas funcionais imediatas, porém a ausência de validação pode representar risco dependendo do uso desses dados em outras partes do sistema
