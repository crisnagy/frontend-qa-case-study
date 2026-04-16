#!/usr/bin/env node

// made by Cristiano Nagy
// Date: 2026-04-15

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { execFileSync } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ask = (question) => {
  return new Promise((resolve) => rl.question(question, resolve));
};

const formatEvidence = (rawEvidence) => {
  const normalized = (rawEvidence || '').trim();

  if (!normalized) {
    return 'Sem evidencia visual disponivel. Comportamento validado por observacao funcional durante teste exploratorio.';
  }

  const noVisualPattern = /^(n\/?a|nao rastreavel|não rastreavel|nao rastreável|não rastreável|sem evidencia|sem evidência)$/i;
  if (noVisualPattern.test(normalized)) {
    return 'Sem evidencia visual disponivel. Comportamento validado por observacao funcional durante teste exploratorio.';
  }

  // Keeps user-provided markdown untouched.
  if (/\[[^\]]+\]\([^\)]+\)/.test(normalized)) {
    return normalized;
  }

  const parts = normalized
    .split(/\s+e\s+|\s*,\s*/)
    .map((item) => item.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean);

  if (parts.length === 0) {
    return 'Sem evidencia visual disponivel. Comportamento validado por observacao funcional durante teste exploratorio.';
  }

  const links = parts.map((item) => {
    const fileName = path.basename(item);
    const encodedFileName = encodeURIComponent(fileName);
    return `- [${fileName}](../evidences/${encodedFileName})`;
  });

  return links.join('\n');
};

(async () => {
  console.log('\n Bug Report Generator (v2)\n');

  const title = await ask('Título do bug: ');
  const description = await ask('Descrição: ');

  // Severidade
  console.log('\nSeveridade:');
  console.log('1 - High');
  console.log('2 - Medium');
  console.log('3 - Low');
  const severityOption = await ask('Escolha (1/2/3): ');
  
  const severityMap = {
    '1': 'High',
    '2': 'Medium',
    '3': 'Low'
  };

  const severity = severityMap[severityOption] || 'Medium';

  // Ambiente
  const browser = await ask('\nBrowser (ex: Chrome): ');
  const resolution = await ask('Resolução (ex: 1920x1080): ');

  // Passos
  console.log('\nPassos para reprodução (digite "fim" para terminar):');
  let steps = [];
  while (true) {
    const step = await ask(`Passo ${steps.length + 1}: `);
    if (step.toLowerCase() === 'fim') break;
    steps.push(step);
  }

  const expected = await ask('\nResultado esperado: ');
  const actual = await ask('Resultado atual: ');
  const impact = await ask('Impacto: ');
  const evidence = await ask('Caminho da evidência (ex: evidences/login.png; para varias use "," ou " e "): ');
  const notes = await ask('Observações (opcional): ');

  rl.close();

  const fileName = title
    .toLowerCase()
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-');

  const stepsFormatted = steps
    .map((s, i) => `${i + 1}. ${s}`)
    .join('\n');
  const evidenceFormatted = formatEvidence(evidence);

  const content = `## Bug: ${title}

### Severidade
${severity}

### Descrição
${description}

### Passos para reprodução
${stepsFormatted}

### Resultado esperado
${expected}

### Resultado atual
${actual}

### Impacto
${impact}

### Ambiente
- Browser: ${browser}
- Resolução: ${resolution}

### Evidência
${evidenceFormatted}

### Observações
${notes || '-'}
`;

  const bugsDir = path.join(process.cwd(), 'bugs');
  const evidenceDir = path.join(process.cwd(), 'evidences');

  if (!fs.existsSync(bugsDir)) fs.mkdirSync(bugsDir);
  if (!fs.existsSync(evidenceDir)) fs.mkdirSync(evidenceDir);

  const filePath = path.join(bugsDir, `${fileName}.md`);
  fs.writeFileSync(filePath, content);

  console.log(`\nBug criado em: ${filePath}`);

  const indexScriptPath = path.join(process.cwd(), 'gen-index.js');
  if (fs.existsSync(indexScriptPath)) {
    try {
      console.log('Atualizando index automaticamente...');
      execFileSync(process.execPath, [indexScriptPath], { stdio: 'inherit' });
    } catch (error) {
      console.log('Aviso: bug criado, mas nao foi possivel atualizar o index automaticamente.');
    }
  }
})();