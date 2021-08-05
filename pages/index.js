import Head from 'next/head'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'

import Header from '../components/Header'

export default function Home({exploreData}) {
  
//npx create-next-app -e with-tailwindcss my-project to create it

  //npm run dev and then copy the localhost link and paste it in the browser
  //delete main and footer
  //head cmp is from nextJs
  //same as head in html5
  // sm -> bigger then mobile screen
 
  return (
    <div className="">
      <Head>
        <title>AirBnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
      <Header/>
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
          <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
            <div className="grid
            sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            ">
                {exploreData?.map(({img,distance,location})=>(
                <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}

                />
              ))}
            </div>
{/* ?.->optional chaining */}
        
          {/* pull data from server - api endpoints(static rendering is used) */}
          {/* if data always change we need to use server side rendering */}
         {/* When user tried to load the site,
          user make a request to server and server deliver a page
         */}
          {/* faster load and better UX */}

          </section>
      </main>
    </div>
  )
}
// we need to create & export  getStaticProps
export async function getStaticProps(){
// fetch some info to build that page
//exploreData->responsible for data
const exploreData=await fetch('https://links.papareact.com/pyp')
.then((res)=>res.json()
)
// we need to return it to the ftc component
return {
  props:{
    exploreData:exploreData
  }
}


}