interface TagsProps {
  items: readonly string[]
}

export function Tags({ items }: TagsProps) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  )
}
