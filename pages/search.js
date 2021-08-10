import { format } from "date-fns"
import { useRouter } from "next/dist/client/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import InfoCard from "../components/InfoCard"
import Map from "../components/Map"

const Search = ({searchResults}) => {
    const router=useRouter()
  
    // ES6 destructuring
    const {location,startDate,endDate,nbOfGuests}=router.query
     //date formating
     const formattedStartDate=format(new Date(startDate),"dd MMMM yy")
     const formattedEndDate=format(new Date(endDate),"dd MMMM yy")
     const range=`${formattedStartDate} - ${formattedEndDate}`
    return (
        <div className='h-screen'>
           <Header
           placeholder={`${location} | ${range} | ${nbOfGuests} guests`}
           />
            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className="text-xs">300+ Stays - {range} - For {nbOfGuests}  guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                    {/* button -> utility created in global folder */}
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className='button'>Cancellation flexibility</p>
                        <p className='button'>Type of place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More filters</p>
                    </div>
                    <div className="flex flex-col">
                    {searchResults.map(({img,location,title,description,star,price,total})=>(
                        <InfoCard 
                        key={img}
                        img={img}
                        location={location}
                        title={title}
                        description={description}
                        star={star}
                        price={price}
                        total={total}

                        
                        
                        />
                    ))}
                    </div>
                </section>
                <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                    <Map searchResults={searchResults} />
                </section>
            </main>

           <Footer />
        </div>
    )
}

export default Search


export async function getServerSideProps(){
const searchResults=await fetch('https://links.papareact.com/isz').then(res=>res.json())
return {
    props:{
    searchResults,
  
    }
  }
}