import React, { useEffect, useState, useRef } from 'react'
import {NavBar,SideBar,Map} from './Components'
import {cities} from './Data/cities'





const App = () => {
    const [query, setQuery] = useState('')
    const [toggle, setToggle] = useState(true)
    const [city, setCity] = useState({longitude:3.3, latitude:6.6,name:'Ikeja'})

    console.log(city);
   
         
        return (
        
        <>
        <NavBar query={query} setQuery={setQuery} toggle={toggle} setToggle={setToggle}  />
        <SideBar query={query} toggle={toggle} setToggle={setToggle} city={city} setCity={setCity} />
        <Map query={query} toggle={toggle} setToggle={setToggle} city={city} setCity={setCity}/>
        
        
        </>
        )
        
        
}

export default App