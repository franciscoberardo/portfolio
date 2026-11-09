import type { SectionHeading as Heading } from '../types'

export function SectionHeading({ eyebrow, title }: Heading) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  )
}
