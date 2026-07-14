function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'light', id }) {
  return (
    <div className={`section-heading section-heading--${align} section-heading--${tone}`}>
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <h2 className="section-heading__title" id={id}>
        {title}
      </h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
