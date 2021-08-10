import Image from 'next/image'
import Typewriter from "typewriter-effect";

function Banner() {
    return (
        <div className="relative h-[300px]
        sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]
        "
        >
        <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        
        />
        {/* tailwind delete all previous styling for h1, h2 , btn etc */}
        <div className="absolute top-1/2 w-full text-center ">
       
            <p className="text-sm sm:text-lg">
            <Typewriter
  
  onInit={(typewriter)=> {

  typewriter
   
  .typeString("Not sure where to go?")
    
  .pauseFor(100)
  .deleteAll()
  .typeString("Perfect. ")
  .start();
  }}
  />
</p>
            <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3
            transition duration-150
            hover:shadow-xl active:scale-90">I'm flexible</button>
        </div>

        </div>
    )
}

export default Banner
