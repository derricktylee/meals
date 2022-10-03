import React from 'react'
import { useGlobalContext } from './Context'
import {AiFillCloseCircle} from "react-icons/ai"

export default function Favourite() {
  const{favourite, onClickFav,handleMouseOver,handleMouseOut, delFav} = useGlobalContext()
  return (
    <div className='favourite'>
      <h4>Favourite</h4>
      <div className="fav-container">
      {favourite.map(item=><div key={item.id} onClick={onClickFav} id={item.id} className="favourite-icon"
      >
        <div className="favourite-container" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
        <img src={item.img} />
        {item.cross&&<button className='cross' onClick={delFav}><AiFillCloseCircle/></button>}
        </div>
        
      </div>)}
      </div></div>
  )
}
