import React from 'react'
import Favourite from '../components/Favourite'
import Meals from '../components/Meals'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div>
        <Nav/>
        <Favourite/>
        <Meals/>
    </div>
  )
}
