import { ArrowUp } from 'lucide-react'
import { footerLinks, SITE, socialLinks } from '../data/content'
import { SocialLink } from './SocialLink'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-[#27272a] bg-[#070707] pb-24 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-lg border border-[#27272a] bg-[#121212] font-display text-sm font-bold text-[#f5f5f5]">
                {SITE.shortName}
              </span>
              <p className="font-display text-lg font-semibold tracking-wide text-white">HARSH JHA</p>
            </div>
            <p className="mt-1 font-mono text-[11px] tracking-wider text-[#a3ff12]">{SITE.year} · DEVELOPER</p>
            <p className="mt-4 max-w-sm text-xs sm:text-sm leading-relaxed text-[#a1a1aa]">
              Second-year Computer Science student passionate about systems, web engineering, and problem solving. Built with React 19, TypeScript, and Tailwind CSS.
            </p>
          </div>

          {/* Nav Links Col */}
          <nav aria-label="Footer" className="md:col-span-3">
            <p className="font-mono text-xs font-semibold text-[#f5f5f5] tracking-wider uppercase">Navigation</p>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline text-xs text-[#a1a1aa] hover:text-white focus-ring transition-colors font-mono"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Connect Col */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs font-semibold text-[#f5f5f5] tracking-wider uppercase">Connect Online</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {socialLinks.map((link) => (
                  <SocialLink key={link.label} {...link} />
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#27272a]/60 flex items-center justify-between">
              <button
                type="button"
                onClick={scrollToTop}
                className="focus-ring inline-flex items-center gap-1.5 font-mono text-xs text-[#a3ff12] hover:text-[#b7ff4a] transition-colors"
              >
                <ArrowUp size={13} /> Back to top
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#27272a] pt-6 font-mono text-[11px] text-[#71717a]">
          <div>© {new Date().getFullYear()} Harsh Jha. All rights reserved.</div>
          <div className="flex items-center gap-1">
            <span>Designed &amp; Developed by Harsh Jha</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
