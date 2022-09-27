import React from 'react'
import { useGlobalContext } from './Context'

export default function Meals() {

    const {meals} = useGlobalContext()
  return (
    <section className='meal-content'>
        {meals.map(item=>{
            const{id,name,img,instruction, area, category} = item
            return(
            <article key={id}>
                <img src={img}/>
                <p>{name}</p></article>
        )})}
    </section>
  )
}
