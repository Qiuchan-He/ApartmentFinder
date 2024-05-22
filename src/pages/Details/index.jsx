import React from 'react'
import {useParams} from "react-router-dom"
import DetailsList from "./DetailsList"

const Details = ()=>{
    const params = useParams();
    return(
        <div>
            <DetailsList id={params.id}/>
        </div>
    )
}

export default Details