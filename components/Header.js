//_rfce
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import {useState} from 'react'
import Image from 'next/image'
import {SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon,UsersIcon} from '@heroicons/react/solid'
function Header() {
    const [searchInput,setSearchInput]=useState('')
    // configuration for date range
    const[startDate,setStartDate]=useState(new Date())
    const[endDate,setEndDate]=useState(new Date())
    const selectionRange={
        startDate:startDate,
        endDate:endDate,
        key:'selection'
        
    }
    const handleSelect=(ranges)=>{
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)

    }
    const[nbOfGuests,setNbOfGuests]=useState(1)

    return (
        // on 768px => md:px-10
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5
        md:px-10
        ">
            {/* control / comment shortcut */}

            
            {/* left */}
           <div className="relative flex items-center h-10 cursor-pointer my-auto">
                {/* nextJs img tage -> optimize img -> webk-> way smaller */}
                {/* we need to pass layout props to Image cmp */}
                {/* we need to list img that are allowed to be used in a file named nextconfigjs */}
                <Image
                    src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit="contain"
                    objectPosition="left"
                />

           </div>
           {/* middle */}
           <div className="flex  items-center md:border-2 rounded-full py-2 md:shadow-sm ">
           <input type="text" placeholder="Start your search" className="outline-none pl-5 bg-transparent flex-grow text-sm text-gray-600 placeholder-gray-400" 
           value={searchInput}
           onChange={(e)=>setSearchInput(e.target.value)}
           />
                <SearchIcon className="h-8 hidden md:inline-flex  bg-red-400 text-white rounded-full p-2 cursor-pointer
                md:mx-2 
                " />
           </div>
           {/* right */}
           {/* tailwind-> first design for mobile then change for medium (md) */}
           <div className="flex items-center space-x-4 justify-end text-gray-600">
            <p className="hidden cursor-pointer md:inline">Become a host</p>
            <GlobeAltIcon className="h-6 cursor-pointer" />
            <div className="flex items-center bg-white  rounded-full space-x-2 border-2 p-2 ">
                <MenuIcon className='h-6 cursor-pointer' />
                <UserCircleIcon className='h-6 cursor-pointer' />
            </div>
           </div>
            {searchInput &&
            
            <div className="flex flex-col col-span-3 mx-auto">

                <DateRangePicker 
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={[
                    "#FD5861"
                ]}
                onChange={handleSelect}
                />
                <div className='flex items-center border-b mb-4'>
                    <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                    <UsersIcon className='h-5' />
                    <input type="number" className='w-12 pl-2 text-lg outline-none text-red-400'
                    value={nbOfGuests} onChange={(e)=>setNbOfGuests(e.target.value)}
                    min={1}
                    />

                </div>
                <div className="flex">
                    <button className="flex-grow text-gray-500" onClick={()=>setSearchInput("")}>Cancel</button>
                    <button className="flex-grow text-red-400">Search</button>
                </div>
            </div>
            
            }

        </header>
    )
}

export default Header
