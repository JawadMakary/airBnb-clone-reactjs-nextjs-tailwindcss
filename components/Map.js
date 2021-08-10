import ReactMapGL , {Marker,Popup} from 'react-map-gl';
import {useState} from 'react'
import { getCenter } from 'geolib';
import * as geolib from 'geolib';

const Map = ({searchResults}) => {
    const[selectedLocation,setSelectedLocation]=useState({})
    //transform searchResult object into longitude/latitude object{}
    // return object with longitude & latitude
    // a foreach loop cannot return a value
    const coordinates=searchResults.map
    (result=>({
        longitude:result.long ,
        latitude:result.lat
    }))
    // console.log(coordinates)
    const center =geolib.getCenter(coordinates)
    // console.log(center)

    const[viewport,setViewport]=useState({
        width:'100%',
        height:'100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    })
    return (
        <ReactMapGL
        //spread the viewport object
         //viewport tell size of the map
        {...viewport}
        mapStyle="mapbox://styles/jawadmak99/cks5krpfmaxxw18nx2bvtyoru"
        
        // from the next.config.js
       mapboxApiAccessToken={process.env.mapbox_key}
        onViewportChange={(nextViewport)=>setViewport(nextViewport)}

        >
            {searchResults.map(result=>(
                <div key={result.long}>
                    <Marker
                    longitude={result.long}
                    latitude={result.lat}
                    offsetLeft={-20}
                    offsetTop={-10}
                    >
                        <p 
                        onClick={()=>setSelectedLocation(result)}
                        aria-label='push-pin'
                        role="img"
                        className='cursor-pointer text-2xl animate-bounce'>
                            📌


                        </p>

                    </Marker>
                    {selectedLocation.long ===result.long ?(
                        <Popup
                        closeOnClick={true}
                        onClose={()=>setSelectedLocation({})}
                        latitude={result.lat}
                        longitude={result.long}
                        >
                            {result.title}
                        </Popup>
                    ):(
                        false
                    )
                    
                    
                    
                    }
                </div>
            ))}
        </ReactMapGL>
    )
}

export default Map
