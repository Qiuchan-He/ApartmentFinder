import React,{useState, useEffect} from 'react'
import api from "../../../api"
import DetailsView from '../DetailsView'

const DetailsList = (props)=>{

    const [detailsData, setDetailsData] = useState({})

    useEffect(()=>{
        api.details({
            id:props.id
        }).then(res =>{
            if(res.status===200){
                setDetailsData(res.data)
            }
        })

    },[])

    return(
        <div>
            {
                detailsData.imgs?
                <DetailsView  detailsData ={detailsData} id={props.id}/> :
                <div>Loading </div>
            }
        </div>
    )
}

export default DetailsList