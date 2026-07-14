function ServiceProblemList({ title, items, icon: Icon }) {
  return (
    <div className="problem-list">
      {title ? <p className="problem-list__title">{title}</p> : null}
      <ul className="problem-list__items">
        {items.map((item) => (
          <li key={item} className="problem-list__item">
            {Icon ? <Icon size={16} aria-hidden="true" /> : null}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ServiceProblemList
