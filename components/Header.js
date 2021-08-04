//_rfce
import Image from 'next/image'
import {SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon,UsersIcon} from '@heroicons/react/solid'
function Header() {
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
           <input type="text" placeholder="Start your search" className="outline-none pl-5 bg-transparent flex-grow text-sm text-gray-600 placeholder-gray-400"  />
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
        </header>
    )
}

export default Header
