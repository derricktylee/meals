import React from 'react'
import { useGlobalContext } from './Context'

export default function Favourite() {
  const{favourite} = useGlobalContext()
  return (
    <div className='favourite'>
      <h4>Favourite</h4>
      {favourite.map(item=><button key={item[0].id} ><img src={item[0].img}/></button>)}
      </div>
  )
}
