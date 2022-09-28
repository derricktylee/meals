import React from 'react'
import { useGlobalContext } from './Context'
import {BsFillHeartFill, BsHeart} from "react-icons/bs"

import Modal from './Modal'

export default function Meals() {

    const {meals, onClickImg,shown,onClickLike} = useGlobalContext()
  return (
    <section className='meal-content-container'>
        <div className='meal-content'>
        {meals.map(item=>{
            const{id,name,img,instruction, area, category,like} = item
            return(
            <article key={id} id={id}>
                <img src={img} onClick={onClickImg}/>
                <div className="like-container">
                <h5>{name}</h5>
                <button onClick={onClickLike}>{like?<BsFillHeartFill/>:<BsHeart/>}</button>
                </div></article>
                
        )})}
          </div>


    </section>
  )
}
