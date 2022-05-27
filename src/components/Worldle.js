import React, { useEffect } from 'react'
import useWorldle from '../hooks/useWorldle'

export default function Worldle({solution}) {
  
  const {currentGuess, handleKeyup} = useWorldle(solution)

  useEffect(() => {
      window.addEventListener('keyup', handleKeyup)
      return () => window.removeEventListener('keyup', handleKeyup)
  },[handleKeyup])

  return (
    <div>current guess - {currentGuess}</div>
  )
}
