import React from 'react'

const Button = ({
  children,
  type,
  onClick
}) => {
  return (
    <button
      className={ `btn ${ type === "primary" ? 'btn-primary' : 'btn-success' }` }
      onClick={ onClick }>
      { children }
    </button>
  )
}

export default Button