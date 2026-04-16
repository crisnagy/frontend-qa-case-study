#!/usr/bin/env node

// made by Cristiano Nagy
// Date: 2026-04-15

const fs = require('fs');
const path = require('path');

const bugsDir = path.join(process.cwd(), 'bugs');
const outputFile = path.join(process.cwd(), 'bugs', 'index.md');

if (!fs.existsSync(bugsDir)) {
  console.log('Diretório "bugs" não encontrado.');
  process.exit(1);
}

const files = fs.readdirSync(bugsDir).filter(f => f.endsWith('.md') && f !== 'index.md');

let bugs = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(bugsDir, file), 'utf-8');

  const titleMatch = content.match(/## Bug: (.+)/);
  const severityMatch = content.match(/### Severidade\s*\n(.+)/);

  const title = titleMatch ? titleMatch[1] : file;
  const severity = severityMatch ? severityMatch[1].trim() : 'Unknown';

  bugs.push({ file, title, severity });
});

// ordenar por severidade
const severityOrder = { High: 1, Medium: 2, Low: 3, Unknown: 4 };

bugs.sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity]);

let content = `# Bug Report Index

Lista de bugs identificados durante análise exploratória.

## Summary

Total de bugs: ${bugs.length}

- High: ${bugs.filter(b => b.severity === 'High').length}
- Medium: ${bugs.filter(b => b.severity === 'Medium').length}
- Low: ${bugs.filter(b => b.severity === 'Low').length}

## Bugs

`;

bugs.forEach(bug => {
  content += `- [${bug.title}](./${bug.file}) - ${bug.severity}\n`;
});

fs.writeFileSync(outputFile, content);

console.log('index.md gerado com sucesso.');