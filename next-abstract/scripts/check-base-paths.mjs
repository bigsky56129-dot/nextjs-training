#!/usr/bin/env node
import fs from 'fs'
import path from 'path'

const root = path.resolve(process.cwd(), '.')
const TARGET_DIRS = [
  path.join(root, 'app'),
  path.join(root, 'components'),
]
const EXTENSIONS = new Set(['.jsx', '.tsx', '.js', '.ts'])

const patterns = [
  // Asset src attributes should not start at root
  { name: 'root-leading src attribute', regex: /\bsrc=["']\/(?!\$\{)/g },
  // Inline style url(...) should not start at root
  { name: 'root-leading style url()', regex: /url\(["']\//g },
  // Literal anchor tags with root-leading href (use Next <Link> instead)
  { name: 'literal <a> with root-leading href', regex: /<a[^>]*\s+href=["']\//g },
]

const issues = []

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const lines = content.split(/\r?\n/)
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    for (const p of patterns) {
      if (p.regex.test(line)) {
        issues.push({ file: filePath, line: i + 1, msg: p.name, text: line.trim() })
      }
    }
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) walk(full)
    else if (EXTENSIONS.has(path.extname(e.name))) scanFile(full)
  }
}

for (const d of TARGET_DIRS) {
  if (fs.existsSync(d)) walk(d)
}

if (issues.length) {
  console.error('\nBase path check failed: found root-leading paths in source files.')
  for (const i of issues) {
    console.error(`- ${i.file}:${i.line} :: ${i.msg}\n    ${i.text}`)
  }
  process.exit(1)
} else {
  console.log('Base path check passed: no root-leading src/url references found.')
}
