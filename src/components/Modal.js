import React from 'react'
import { useGlobalContext } from './Context'

export default function Modal() {

  const{modalMeal,onClickClose} = useGlobalContext()
  console.log(modalMeal)
  const{id, img, instruction, area, category,name} = modalMeal[0]
  return (
    <section className='modal-container'>
      <div className='modal'>
        <div className="img-container">
        <img src={img}/>
        </div>
        <div className="modal-content-container">
        <h3>Name: {name}</h3>
        <p><span>Area</span>: {area}</p>
        <p><span>Category</span>: {category}</p>
        <p><span>Instruction</span>: {instruction}</p>
        <button onClick={onClickClose}>Close</button>
        </div>

        

      </div>
    </section>
  )
}
