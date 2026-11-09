import type { PortfolioCopy } from '../i18n/translations'

interface TerminalProps {
  copy: PortfolioCopy['terminal']
}

export function Terminal({ copy }: TerminalProps) {
  return (
    <aside className="terminal" aria-label={copy.label}>
      <div className="terminal-bar" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <pre>
        <code>
          <span className="code-key">const</span> francisco = {'{\n'}
          {'  '}role: <span className="code-string">"{copy.role}"</span>,{'\n'}
          {'  '}stack: <span className="code-string">"{copy.stack}"</span>,{'\n'}
          {'  '}focus: <span className="code-string">"{copy.focus}"</span>{'\n'}
          {'}\n'}
          <span className="cursor" aria-hidden="true">▋</span>
        </code>
      </pre>
    </aside>
  )
}
