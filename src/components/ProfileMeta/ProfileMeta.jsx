import React, {useState} from "react";

const ProfileMeta = (props) => {
    const [status, setStatus] = useState("Hello My Frends");
    const [editMode, setEditMode] = useState(false)

    return (
        <div className="profile-meta">
            <div className="profile-meta__title">
                <h4>{props.name}</h4>
            </div>
            <div className="profile-meta__body">

                {
                    editMode
                        ? <input type="text" onChange={()=> {setStatus("YayA")}} autoFocus={true} onBlur={()=>{setEditMode(false)}} value={{status}}/>
                        :  <p onDoubleClick={()=> {setEditMode(true)}} >{status}</p>
                }




            </div>
    </div>
    )
}
export default ProfileMeta;