type SectionHeadingProps = {
  index: string
  label: string
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({
  index,
  label,
  title,
  subtitle,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="font-mono text-[11px] tracking-[0.22em] text-[#A3FF12]">
        {index} / {label}
      </p>
      <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-[1.15] text-[#F5F5F5] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#A1A1AA]">{subtitle}</p>
      ) : null}
    </div>
  )
}
