import React, { useEffect } from 'react'
import useWorldle from '../hooks/useWorldle'

export default function Worldle({solution}) {
  
  const {currentGuess, handleKeyup, guesses, isCorrect, turn} = useWorldle(solution)

  useEffect(() => {
      window.addEventListener('keyup', handleKeyup)
      return () => window.removeEventListener('keyup', handleKeyup)
  },[handleKeyup])

  useEffect(() => {
      console.log(guesses, isCorrect, turn)
  }, [guesses, turn, isCorrect])

  return (
    <div>
      <div>solution - {solution}</div>
      <div>current guess - {currentGuess}</div>
    </div>    
  )
}
