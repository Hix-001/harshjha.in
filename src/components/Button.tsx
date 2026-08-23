import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

type Shared = {
  children: ReactNode
  variant?: Variant
  className?: string
}

type ButtonAsButton = Shared &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    href?: undefined
  }

type ButtonAsLink = Shared & {
  href: string
  target?: string
  rel?: string
  onClick?: () => void
  'aria-label'?: string
}

export type ButtonProps = ButtonAsButton | ButtonAsLink

const variants: Record<Variant, string> = {
  primary: 'bg-[#A3FF12] text-black hover:bg-[#b7ff4a]',
  secondary:
    'bg-transparent border border-[#27272A] text-white hover:border-[#A3FF12]',
  ghost: 'bg-transparent text-[#A1A1AA] hover:text-white',
}

const base =
  'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all whitespace-nowrap hover:-translate-y-0.5 focus-ring'

export function Button(props: ButtonProps) {
  const classes = `${base} ${variants[props.variant ?? 'primary']} ${props.className ?? ''}`

  if ('href' in props && props.href) {
    return (
      <a
        href={props.href}
        target={props.target}
        rel={props.rel}
        onClick={props.onClick}
        aria-label={props['aria-label']}
        className={classes}
      >
        {props.children}
      </a>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button type="button" className={classes} disabled={buttonProps.disabled} onClick={buttonProps.onClick}>
      {props.children}
    </button>
  )
}
