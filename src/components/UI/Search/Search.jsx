import React, { useState } from 'react'
import './search.css'

export const Searching = () => {

  return(
    <>
      <input type='text' name='search' placholder='Buscar..' />
    </>
  )
}

export const Search = () => {  
  const [search,setSearch] = useState(false)
  const  searching = () =>{
    setSearch(true)
    if (
      
    ) {
      
    }
  }

  return (
    {
      <li id='search' className="list" onClick={searching}>Buscar</li>
    }
  )
}
