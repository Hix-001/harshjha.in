import { useState, useRef, useEffect, type ReactNode, type FormEvent } from 'react'
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from 'lucide-react'
import { terminalCommands } from '../data/content'

type TerminalCardProps = {
  title?: string
  children?: ReactNode
  className?: string
  interactive?: boolean
}

interface CommandHistory {
  command: string
  output: string[]
  timestamp: string
}

export function TerminalCard({
  title = 'harsh@portfolio ~',
  children,
  className = '',
  interactive = false,
}: TerminalCardProps) {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'cat status.json',
      output: [
        '{',
        '  "developer": "Harsh Jha",',
        '  "focus": "Full Stack & CS Foundations",',
        '  "status": "Building performant software",',
        '  "tip": "Type \'help\' or click pills below to explore"',
        '}',
      ],
      timestamp: '13:37',
    },
  ])
  const [cmdHistoryIdx, setCmdHistoryIdx] = useState<number | null>(null)
  const [pastCommands, setPastCommands] = useState<string[]>(['cat status.json'])
  const outputEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim()
    if (!trimmed) return

    const cmdLower = trimmed.toLowerCase()
    setPastCommands((prev) => [...prev, trimmed])
    setCmdHistoryIdx(null)

    if (cmdLower === 'clear' || cmdLower === 'cls') {
      setHistory([])
      setInput('')
      return
    }

    let outputLines: string[] = []

    if (cmdLower === 'ls' || cmdLower === 'dir') {
      outputLines = ['about.txt', 'skills.md', 'projects/', 'contact.sh', 'resume.pdf', 'status.json']
    } else if (cmdLower === 'date') {
      outputLines = [new Date().toUTCString()]
    } else if (cmdLower === 'cat about.txt' || cmdLower === 'cat bio.txt') {
      outputLines = terminalCommands['about'] as string[]
    } else if (terminalCommands[cmdLower]) {
      const resp = terminalCommands[cmdLower]
      outputLines = Array.isArray(resp) ? resp : [resp]
    } else {
      outputLines = [
        `command not found: "${trimmed}".`,
        "Type 'help' to see all available commands or click quick action buttons.",
      ]
    }

    const now = new Date()
    const timestamp = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`

    setHistory((prev) => [...prev, { command: trimmed, output: outputLines, timestamp }])
    setInput('')
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    handleCommand(input)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (pastCommands.length === 0) return
      const nextIdx = cmdHistoryIdx === null ? pastCommands.length - 1 : Math.max(0, cmdHistoryIdx - 1)
      setCmdHistoryIdx(nextIdx)
      setInput(pastCommands[nextIdx] || '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (cmdHistoryIdx === null) return
      const nextIdx = cmdHistoryIdx + 1
      if (nextIdx >= pastCommands.length) {
        setCmdHistoryIdx(null)
        setInput('')
      } else {
        setCmdHistoryIdx(nextIdx)
        setInput(pastCommands[nextIdx])
      }
    }
  }

  useEffect(() => {
    if (interactive) {
      outputEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [history, interactive])

  const quickPills = ['help', 'skills', 'projects', 'contact', 'stats', 'clear']

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-[#27272a] bg-[#121212] shadow-[0_24px_80px_rgba(0,0,0,0.55)] transition-all ${className}`}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-[#27272a] bg-[#171717] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-[#ef4444]/80" />
          <span className="size-2.5 rounded-full bg-[#eab308]/80" />
          <span className="size-2.5 rounded-full bg-[#a3ff12]/80" />
          <p className="ml-2 flex items-center gap-1.5 font-mono text-[11px] text-[#a1a1aa]">
            <TerminalIcon size={12} className="text-[#a3ff12]" />
            {title}
          </p>
        </div>
        {interactive && (
          <span className="flex items-center gap-1 font-mono text-[10px] text-[#5eead4]">
            <Sparkles size={10} />
            INTERACTIVE
          </span>
        )}
      </div>

      {/* Body */}
      {interactive ? (
        <div
          className="flex flex-col p-4 sm:p-5 font-mono text-xs sm:text-sm text-[#f5f5f5] min-h-[290px] max-h-[360px] overflow-y-auto"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Quick Action Pills */}
          <div className="mb-3 flex flex-wrap gap-1.5 border-b border-[#27272a]/60 pb-2.5">
            <span className="text-[10px] text-[#71717a] py-0.5">Quick:</span>
            {quickPills.map((pill) => (
              <button
                key={pill}
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  handleCommand(pill)
                }}
                className="rounded border border-[#27272a] bg-[#171717] px-2 py-0.5 text-[10px] text-[#5eead4] transition-all hover:border-[#a3ff12] hover:text-[#a3ff12] active:scale-95"
              >
                {pill}
              </button>
            ))}
          </div>

          {/* History */}
          <div className="space-y-3">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[#a3ff12] font-semibold">harsh@dev:~$</span>
                  <span className="text-white font-medium">{item.command}</span>
                </div>
                <div className="pl-4 text-[#a1a1aa] leading-relaxed whitespace-pre-wrap text-xs">
                  {item.output.map((line, lIdx) => (
                    <div key={lIdx} className={line.startsWith('1.') || line.startsWith('2.') ? 'text-[#5eead4]' : ''}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div ref={outputEndRef} />
          </div>

          {/* Input Prompt */}
          <form onSubmit={handleSubmit} className="mt-3 flex items-center gap-2 pt-2 border-t border-[#27272a]/40">
            <span className="text-[#a3ff12] font-semibold text-xs whitespace-nowrap">harsh@dev:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help' or command..."
              className="w-full bg-transparent font-mono text-xs text-white placeholder-[#52525b] outline-none"
              autoCapitalize="off"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              type="submit"
              aria-label="Execute command"
              className="text-[#71717a] hover:text-[#a3ff12] transition-colors"
            >
              <CornerDownLeft size={13} />
            </button>
          </form>
        </div>
      ) : (
        <div className="p-5 font-mono text-[13px] leading-relaxed text-[#f5f5f5] sm:p-6 sm:text-sm">
          {children}
        </div>
      )}
    </div>
  )
}
