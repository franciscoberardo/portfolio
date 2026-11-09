interface ArrowProps {
  down?: boolean
  size?: number
}

export function Arrow({ down = false, size = 16 }: ArrowProps) {
  return (
    <span aria-hidden="true" style={{ fontSize: size, lineHeight: 1 }}>
      {down ? '↘' : '↗'}
    </span>
  )
}
