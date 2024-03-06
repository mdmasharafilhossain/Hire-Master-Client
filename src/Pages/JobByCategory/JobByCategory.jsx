import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import JobByCategoryCard from "./JobByCategoryCard";
import Navbar2 from "../../Comonents/Navbar/Navbar2";


const JobByCategory = () => {

    const [card,setCard] = useState({})
    const [cards,setCards] = useState([])
    const {_id} = useParams()

    console.log(card)
    console.log(cards)

    useEffect(() =>{
        fetch('/category.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    useEffect(() =>{
        const findJobs = cards.find(job => job.id == _id)
        setCard(findJobs)
    },[_id, cards])



    return (
        <div>
            <Navbar2></Navbar2>
           <JobByCategoryCard card={card}></JobByCategoryCard>
        </div>
    );
};

export default JobByCategory;