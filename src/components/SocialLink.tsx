import { ArrowUpRight } from 'lucide-react'

type SocialLinkProps = {
  href: string
  label: string
  placeholder?: boolean
}

export function SocialLink({ href, label, placeholder }: SocialLinkProps) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      className="link-underline inline-flex items-center gap-1 font-mono text-xs text-[#A1A1AA] hover:text-[#A3FF12] focus-ring"
      aria-label={placeholder ? `${label} (placeholder — replace in src/data/content.ts)` : label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {label}
      <ArrowUpRight size={12} aria-hidden />
    </a>
  )
}
