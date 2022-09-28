import React from 'react'
import { useGlobalContext } from '../components/Context'
import Favourite from '../components/Favourite'
import Meals from '../components/Meals'
import Modal from '../components/Modal'
import Nav from '../components/Nav'

export default function Home() {
    const {shown} = useGlobalContext()

  return (
    <div>
        <Nav/>
        <Favourite/>
        <Meals/>
       {shown && <Modal/>}
    </div>
  )
}
