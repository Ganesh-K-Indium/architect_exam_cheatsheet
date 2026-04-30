import { Fragment } from "react";

// Matches (in order of priority):
// 1. --double-dash-flags
// 2. -p single-letter flags
// 3. `backtick code`
// 4. 'single quoted'
// 5. "double quoted"
// 6. ${VAR} template literals
// 7. snake_case identifiers (underscore-separated)
// 8. PascalCase compounds e.g. ResultMessage, PreToolUse
// 9. camelCase identifiers e.g. allowedTools, isError, maxTurns
// 10. .file.ext and path patterns
const CODE_PATTERN =
  /(--[\w-]+(?=[\s,.:;)'\]"!?]|$)|-[a-z](?=\s|,|$)|`[^`]+`|'[^']{1,40}'|"[^"]{1,40}"|\$\{[^}]+\}|\b[a-z][a-z0-9]*(?:_[a-z0-9_]+)+\b|\b[A-Z][a-z]+(?:[A-Z][a-z]*)+\b|\b[a-z]+(?:[A-Z][a-zA-Z0-9]*)+\b|\.[\w./-]+)/g;

function splitWithMatches(text: string): { value: string; isCode: boolean }[] {
  const result: { value: string; isCode: boolean }[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(CODE_PATTERN)) {
    if (match.index! > lastIndex) {
      result.push({ value: text.slice(lastIndex, match.index), isCode: false });
    }
    result.push({ value: match[0], isCode: true });
    lastIndex = match.index! + match[0].length;
  }
  if (lastIndex < text.length) {
    result.push({ value: text.slice(lastIndex), isCode: false });
  }
  return result;
}

interface Props {
  text: string;
  className?: string;
}

export default function ConceptText({ text, className = "" }: Props) {
  const parts = splitWithMatches(text);

  return (
    <span className={className}>
      {parts.map((part, i) =>
        part.isCode ? (
          <code
            key={i}
            className="inline-flex items-center align-middle mx-0.5 px-1.5 py-0 rounded bg-slate-800 border border-slate-600/50 font-mono text-[11px] text-amber-300 leading-5"
          >
            {part.value.replace(/^['"`]|['"`]$/g, "")}
          </code>
        ) : (
          <Fragment key={i}>{part.value}</Fragment>
        )
      )}
    </span>
  );
}
