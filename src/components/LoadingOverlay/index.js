import React from 'react'
import { BeatLoader } from 'react-spinners'

const LoadingOverlay = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <BeatLoader />
    </div>
  )
}

export default LoadingOverlay