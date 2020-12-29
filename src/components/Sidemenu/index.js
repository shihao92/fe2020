import React, { useState, useEffect } from 'react'

import './index.scss'

const Sidemenu = ({
  title
}) => {
  const [ count, updateCount ] = useState( 0 )

  useEffect(() => {
    updateCount( count + 1 )
  }, [])

  useEffect(() => {
    updateCount( count + 1 )
  }, [ title ])

  return (
    <div className="col-md-3" style={{ height: '100vh', border: '5px solid #000', display: 'inline-block' }}>
      <div>I am sidemenu here.</div>
      <p>{ count }</p>
      <p>{ title }</p>
      <button 
        className="btn btn-primary" 
        onClick={() => updateCount( count + 1 )}>
        Click me!
      </button>
    </div>
  )
}

export default Sidemenu