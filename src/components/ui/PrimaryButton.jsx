import { Link } from 'react-router-dom'

function PrimaryButton({ to, href, onClick, type = 'button', children, className = '', ...rest }) {
  const classes = `btn btn--primary ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  )
}

export default PrimaryButton
