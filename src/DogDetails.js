import React from 'react'
import { useParams } from "react-router-dom";




const DogDetails = (props) => {
    const { name } = useParams();
    

    return (
        <>
            <p>DogDetails: {name}</p>
            <p>Age: {props.age}</p>
            <p>{props.facts}</p>
            <img src={`./react-router-patterns-exercise-images/${name}.jpg`}></img>
            
        </>
    )
}



export default DogDetails;