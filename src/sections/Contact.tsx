import { useState } from 'react'
import { SITE } from '../data/content'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { Button } from '../components/Button'
import { SectionHeading } from '../components/SectionHeading'
import { TerminalCard } from '../components/TerminalCard'
import { Mail, Copy, Check, Github, Linkedin } from 'lucide-react'

export function Contact() {
  const { ref, isInView } = useInViewAnimation()
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="border-t border-[#27272a] py-20 md:py-28 bg-[#070707]">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl items-start gap-12 px-5 md:grid-cols-12 md:px-8"
      >
        {/* Left Col: Contact Info & CTA */}
        <div className={`md:col-span-6 ${isInView ? 'fade-in-up' : 'opacity-0'}`}>
          <SectionHeading
            index="06"
            label="GET IN TOUCH"
            title="Have an idea, project, or opportunity? Let's talk."
            subtitle="Whether it is an internship, open-source project, developer collaboration, or just a chat about tech—my inbox is always open."
          />

          {/* Quick Copy Email Box */}
          <div className="mt-8 rounded-2xl border border-[#27272a] bg-[#121212] p-5 shadow-lg">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex size-10 items-center justify-center rounded-xl bg-[#a3ff12]/10 border border-[#a3ff12]/20 text-[#a3ff12] shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0 truncate">
                  <p className="font-mono text-[10px] text-[#71717a] uppercase tracking-wider">Direct Email</p>
                  <p className="font-mono text-sm font-medium text-white truncate">{SITE.email}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="focus-ring flex items-center gap-1.5 rounded-lg border border-[#27272a] bg-[#171717] px-3 py-2 font-mono text-xs text-[#a1a1aa] transition-all hover:border-[#a3ff12] hover:text-[#a3ff12] active:scale-95 shrink-0"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-[#a3ff12]" />
                    <span className="text-[#a3ff12]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Links List */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            <Button href={`mailto:${SITE.email}`}>
              <Mail size={15} /> Send an Email
            </Button>
            <Button href={SITE.github} variant="secondary" target="_blank" rel="noopener noreferrer">
              <Github size={15} /> GitHub
            </Button>
            <Button href={SITE.linkedin} variant="secondary" target="_blank" rel="noopener noreferrer">
              <Linkedin size={15} /> LinkedIn
            </Button>
            <Button href={SITE.leetcode} variant="ghost" target="_blank" rel="noopener noreferrer">
              LeetCode
            </Button>
            <Button href={SITE.hackerrank} variant="ghost" target="_blank" rel="noopener noreferrer">
              HackerRank
            </Button>
          </div>
        </div>

        {/* Right Col: Terminal Connection Simulator */}
        <div
          className={`md:col-span-6 ${isInView ? 'fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <TerminalCard title="connection_tunnel.sh">
            <div className="space-y-2 text-xs">
              <p className="text-[#a1a1aa]">
                <span className="text-[#a3ff12]">&gt;</span> ssh guest@harshjha.in --port 2222
              </p>
              <p className="text-[#5eead4] font-medium">[AUTHENTICATED] Handshake established (TLS 1.3)</p>
              <div className="my-3 rounded-lg border border-[#27272a] bg-[#171717] p-3 text-[11px] space-y-1">
                <div className="flex justify-between text-[#a1a1aa]">
                  <span>Status:</span> <span className="text-[#a3ff12]">AVAILABLE_FOR_ROLES</span>
                </div>
                <div className="flex justify-between text-[#a1a1aa]">
                  <span>Response Time:</span> <span className="text-white">&lt; 24 hours</span>
                </div>
                <div className="flex justify-between text-[#a1a1aa]">
                  <span>Timezone:</span> <span className="text-white">IST (UTC+5:30)</span>
                </div>
                <div className="flex justify-between text-[#a1a1aa]">
                  <span>Preferred Stack:</span> <span className="text-[#5eead4]">React · TS · C++ · Node</span>
                </div>
              </div>
              <p className="text-[#a1a1aa]">
                <span className="text-[#a3ff12]">&gt;</span> echo $WELCOME_MESSAGE
              </p>
              <p className="text-white">
                "Looking forward to connecting and creating impactful software together!"
              </p>
              <p className="mt-2 text-[#a3ff12] flex items-center gap-1">
                <span>&gt; await connection.ready()</span>
                <span className="inline-block h-3.5 w-1.5 bg-[#a3ff12] cursor-blink" aria-hidden />
              </p>
            </div>
          </TerminalCard>
        </div>
      </div>
    </section>
  )
}
