import React from "react"
import "./styles.css"

function ProfilePic() {
    return (
        <img className="float-md-left mx-auto d-block profile" src={require("../../assets/images/profilepic.jpg")} alt="Profile"/>
    )
}

export default ProfilePic