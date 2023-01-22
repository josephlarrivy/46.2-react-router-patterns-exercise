import React from "react";
import DogDetails from "./DogDetails";



let dogs = [
    {
        name: "Whiskey",
        age: 5,
        // src: whiskey,
        facts: [
            "Whiskey loves eating popcorn.",
            "Whiskey is a terrible guard dog.",
            "Whiskey wants to cuddle with you!"
        ]
    },
    {
        name: "Duke",
        age: 3,
        // src: duke,
        facts: [
            "Duke believes that ball is life.",
            "Duke likes snow.",
            "Duke enjoys pawing other dogs."
        ]
    },
    {
        name: "Perry",
        age: 4,
        // src: perry,
        facts: [
            "Perry loves all humans.",
            "Perry demolishes all snacks.",
            "Perry hates the rain."
        ]
    },
    {
        name: "Tubby",
        age: 4,
        // src: tubby,
        facts: [
            "Tubby is really stupid.",
            "Tubby does not like walks.",
            "Angelina used to hate Tubby, but claims not to anymore."
        ]
    }
]

const ReturnDogRoutes = () => {

    for (let dog of dogs) {
        return (
            <DogDetails name={dog.name} age={dog.age} facts={dog.facts}/>
        )
    }
}





export default ReturnDogRoutes;