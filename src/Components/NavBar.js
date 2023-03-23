import React from 'react'
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'

const NavBar = ({query, setQuery, toggle, setToggle}) => {

  const myFunction = (e) =>{
    setQuery(e.target.value)
  }

  const myFunctionone =()=>{
    setToggle(!toggle)

    console.log(toggle);
  }
  return (
    <>
      <div className='!w-[100vw] py-3 bg-white shadow-md flex justify-between items-center fixed top-0 z-30'>

        <div className='flex items-center'>
          <h1 className='text-black text-2xl font-bold mx-4'>
            CityExplorer
          </h1>

          <form className='flex gap-3 items-center' onSubmit={(e)=>(e.preventDefault())}>
            <input type="text" className='outline-none border-2 border-gray-300 rounded-md p-2 w-[100px] md:w-[195px]' onChange={myFunction} placeholder={'Search any city...'} />
            <button type="submit" onClick={()=>setToggle(true)}>
              <FaSearch />
            </button>
          </form>
        </div>

        <button className={`${toggle === false ? 'block mx-4': 'hidden'} `} onClick={myFunctionone}>
          <FaBars size={20} />

        </button>
        <button onClick={myFunctionone} className={`${toggle === false ? 'hidden': 'block mx-4'} `} >
          <FaTimes size={20}/>
        </button>

      </div>
    </>
  )
}

export default NavBar