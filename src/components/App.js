// create your App component here
import { useEffect, useState } from "react";
import React from "react";

const App = () => {
    const [image, setImage] = useState("")
    //const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())
        //console.log(r.json)
        .then((data) => setImage(data.message))
        .catch(error => error.message)
    },[])

    return (
       <div> { image === "" ?
        <p>Loading...</p> :
        <img src={image} alt="A Random Dog" />
       }
        </div>
    )
}

export default App;