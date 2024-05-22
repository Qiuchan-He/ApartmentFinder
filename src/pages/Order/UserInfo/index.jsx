import React from 'react'
import "./style.less"

const UserInfo = (props)=>{

    const user = props.user
    const city = props.city
    return(
        <div className="userinfo-container">
            <p>
                <i className="icon-user"></i>
                <span>{user.nick}</span>
            </p>
            <p>
                <i className="icon-map-marker"></i>
                <span>{city.cityName}</span>
            </p>
        </div>
    )
}

export default UserInfo