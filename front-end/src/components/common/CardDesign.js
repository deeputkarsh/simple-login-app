import React from 'react'

export default function CardDesign ({ children, className = '' }) {
  return (
    <div className={`white-card ${className}`}>{children}</div>
  )
}
