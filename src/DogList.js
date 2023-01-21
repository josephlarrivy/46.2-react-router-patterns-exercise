import React from 'react'
import { Link } from "react-router-dom";





const DogList = () => {


    return (
        <>
            <h1>DogList</h1>
            <p><Link to="/dogs/whiskey">whiskey</Link></p>
            <p><Link to="/dogs/duke">duke</Link></p>
            <p><Link to="/dogs/perry">perry</Link></p>
            <p><Link to="/dogs/tubby">tubby</Link></p>

        </>
    )
}

export default DogList;