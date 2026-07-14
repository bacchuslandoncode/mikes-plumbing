function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'light', id, level = 2 }) {
  const Heading = `h${level}`

  return (
    <div className={`section-heading section-heading--${align} section-heading--${tone}`}>
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <Heading className="section-heading__title" id={id}>
        {title}
      </Heading>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
