import React, { createContext, useContext, useEffect, useState } from 'react'
const url = "http://www.themealdb.com/api/json/v1/1/search.php?s="
const AppContext = createContext()

export function AppProvider({children}){

    const [meals, setMeals] = useState([])
    const [search, setsearch] = useState("a")
    function handleChange(e){
        setsearch(e.target.value)
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
                    category:strCategory}
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


    return <AppContext.Provider value={{meals,handleChange,search}}>{children}</AppContext.Provider>
}

export function useGlobalContext(){
    return useContext(AppContext)
}