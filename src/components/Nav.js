import React from 'react'
import { useGlobalContext } from './Context'

export default function Nav() {

  const {search, handleChange} = useGlobalContext()
  function handleSubmit(e){
    e.preventDefault()
  
  }
  return (
    <nav>
      <form onSubmit={handleSubmit}>
        <input id='search' value={search} onChange={handleChange}></input>
      </form>
    </nav>
  )
}
