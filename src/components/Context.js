import React, { createContext, useContext, useEffect, useState } from 'react'
import Modal from './Modal'
const url = "http://www.themealdb.com/api/json/v1/1/search.php?s="
const AppContext = createContext()

export function AppProvider({children}){

    const [meals, setMeals] = useState([])
    const [search, setsearch] = useState("")
    const [shown, setShown] = useState(false)
    const [modalMeal, setModalMeal] = useState({
        id:"",
        img:"",
        instruction:"",
        area:"",
        category:"",
        name:""
    })
    

    function handleChange(e){
        setsearch(e.target.value)

    }

    function onClickImg(e){
        setShown(true)
        setModalMeal(meals.filter(item=>item.id==e.target.parentElement.id))
    }

    function onClickClose(){
        setShown(false)
    }

    function onClickLike(e){
        console.log(e.target.closest('article').id)
        setMeals(prevMeals=>{
            return(
                prevMeals.map(
                    meal=>{
                            if(meal.id==e.target.closest('article').id){return {...meal, like:!meal.like}} return meal
                    }
                )
            )
        })
    }



    async function fetchData(){
        try {
            const newUrl = url+search
            const res = await fetch(newUrl)
            const data = await res.json()
            const meal = data.meals.map(item=>{
               const {idMeal,strMealThumb,strInstructions,strArea,strCategory,strMeal} = item
                return(
                    {id:idMeal,
                    name: strMeal,
                    img:strMealThumb,
                    instruction:strInstructions,
                    area:strArea,
                    category:strCategory,
                    like:false}
                )
            })
            setMeals(meal)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(()=>{
        fetchData()
    },[search])


    return <AppContext.Provider value={{onClickLike,onClickClose,modalMeal,meals,handleChange,search,onClickImg,shown}}>{children}</AppContext.Provider>
}

export function useGlobalContext(){
    return useContext(AppContext)
}