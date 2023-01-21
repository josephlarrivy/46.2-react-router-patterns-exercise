import React from 'react'
import { useParams } from "react-router-dom";




const DogDetails = (props) => {
    const { name } = useParams();
    console.log(name)
    console.log(props)

    return (
        <>
            <p>DogDetails: {name}</p>
        </>
    )
}

export default DogDetails;