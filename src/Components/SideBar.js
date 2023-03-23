import React, { useMemo, useState } from 'react'
import { FaGlobe } from 'react-icons/fa'
import { cities } from '../Data/cities'
import { Map } from './index'




const SideBar = ({ query, toggle, setToggle, setCity,city }) => {
    

    const getFiltered = () => {
        if (query === '') {
            return cities
        }

        return (
             cities.filter((each) => (each.name.toLowerCase().includes(query.toLowerCase()))) 
        )
    }

    

    const getSetCity = (e) =>{
        const {longitude, latitude, name} = e.target.dataset
        console.log(name, longitude, latitude);
        setCity((prev)=>(prev = {...city,latitude,longitude,name}))
        
       
    }

    const filteredList = useMemo(getFiltered, [query])
    return (
        <div className='absolute left-0 top-[67px] bg-gray-50 overflow-scroll z-20 '>
            <div className={`${toggle ? 'md:w-[350px] w-[200px] transition-all ease-in border-r-2 border-gray-200 h-[100vh] ' : 'w-0 transition-all ease-in overflow-hidden'}`}>

                <header>
                    <h2 className='font-bold text-2xl text-center py-4'>
                        Cities
                    </h2>

                    <h6 className='mx-auto text-center'>
                    <a href="mailto:akejunifemi11@gmail.com" target={'_blank'}>
                    <i className='text-gray-400 underline'>akejunifemi11@gmail.com</i>
                    </a>
                    </h6>
                </header>

                <ul className='flex justify-start flex-col h-[100%] items-start text-justify '>
                    {
                        filteredList.length > 0 ? 
                        
                            filteredList.map((city) =>
                            {
                                
                               return( <div key={city.name} onClick={getSetCity} data-name={city.name} data-longitude={city.longitude} data-latitude={city.latitude}  id="city" className='text-center px-4 py-2 flex gap-2 items-center w-full'> <FaGlobe />{city.name}</div> 
    
                               )
    
                            
                        }
                            )
                        :
                        <div className='text-center px-4 py-2 flex gap-2 items-center w-full'>

                            No result found

                        </div>
                    }
                </ul>


            </div>

            

         
        </div>
    )
}

export default SideBar