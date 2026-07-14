function ServiceProcess({ steps }) {
  return (
    <div className="process-steps">
      {steps.map((step, index) => (
        <div key={step.title} className="process-step">
          <p className="process-step__index">{String(index + 1).padStart(2, '0')}</p>
          <p className="process-step__title">{step.title}</p>
          <p className="process-step__text">{step.text}</p>
        </div>
      ))}
    </div>
  )
}

export default ServiceProcess
