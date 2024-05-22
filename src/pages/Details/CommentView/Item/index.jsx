import React from "react"
import Star from "../../../../components/Star"
import "./style.less"


const Item = (props)=>{

    const data = props.data;
    
    return(
        <div className="comment-item">
            <h3>
                <i className="icon-user"></i>
                {data.username}
            </h3>
            <Star num={data.star}/>
            <p>{data.comment}</p>
        </div>
    )
}


export default Item