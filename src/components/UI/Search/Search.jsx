import React, { useState } from 'react'
import './search.css'
//icons
import {GrFormClose as CloseSearch} from 'react-icons/gr'
import {BiSearchAlt2 as Searching} from 'react-icons/bi'

export const Search = () => {  
  const [search,setSearch] = useState(false)
  
  const  searching = () =>{
    return setSearch(true)
  }

  const closeSearching = () =>{
    return setSearch(false)
  }

  return (
    <>
      {search&&
      <>
        <input className='search_input' type='text' name='search' placeholder='Busca en TouristApp' />
        <CloseSearch className='icon_close_search' onClick={closeSearching}/>
        <Searching  className='icon_search'/>
      </>
      }
      <li id='search' className="list" onClick={searching}>Buscar</li>
    </>
  )
}
