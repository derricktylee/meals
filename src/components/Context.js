import React, { createContext, useContext, useEffect, useState } from 'react'
import Modal from './Modal'
const url = "http://www.themealdb.com/api/json/v1/1/search.php?s="
const AppContext = createContext()

export function AppProvider({children}){


    const [meals, setMeals] = useState([])
    const [search, setsearch] = useState("")
    const [shown, setShown] = useState(false)
    const [favourite, setFavourite] = useState(JSON.parse(localStorage.getItem("favourite"))||[])
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
        setModalMeal(meals.find(item=>item.id==e.target.parentElement.id))
    }

    function onClickClose(){
        setShown(false)
    }

    function onClickLike(e){
        
        setFavourite(prevFav=>{
            if(prevFav.filter(meal=>meal.id==e.target.closest('article').id).length==0)
            { const favMeal = meals.filter(meal=>meal.id==e.target.closest('article').id)[0]
                return [...prevFav,favMeal]}
        else{return prevFav.filter(meal=>meal.id!==e.target.closest('article').id)}})
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

    function onClickFav(e){
        setShown(true)
        setModalMeal(favourite.find(item=>item.id==e.target.id))
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
                    like:false,
                    cross:false}
                )
            })
            setMeals(meal)
        } catch (error) {
            console.log(error)
        }

    }


    function handleMouseOver(e){
        setFavourite(prevFav=>prevFav.map(item=>item.id==e.target.parentElement.id?{...item,cross:true}:item))
    }


    function handleMouseOut(e){
        setFavourite(prevFav=>prevFav.map(item=>item.id==e.target.parentElement.id?{...item,cross:false}:item))
    }

    function delFav(e){

        console.log(favourite)

        setFavourite(prevFav=>prevFav.filter(item=>item.id!=e.target.closest(".favourite-icon").id))
    }

    useEffect(()=>{
        fetchData()
    },[search])

    useEffect(()=>{
        localStorage.setItem("favourite", JSON.stringify(favourite))
    },[favourite])






    return <AppContext.Provider value={{delFav,handleMouseOver,handleMouseOut,onClickFav,favourite,onClickLike,onClickClose,modalMeal,meals,handleChange,search,onClickImg,shown}}>{children}</AppContext.Provider>
}

export function useGlobalContext(){
    return useContext(AppContext)
}