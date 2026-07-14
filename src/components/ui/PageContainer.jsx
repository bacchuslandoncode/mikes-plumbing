function PageContainer({ children, className = '', as: Component = 'div' }) {
  return <Component className={`page-container ${className}`.trim()}>{children}</Component>
}

export default PageContainer
