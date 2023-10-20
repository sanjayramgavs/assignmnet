import React from "react";

function DoctorAviability(props){
    const {currentTime} = props;
    let doctorAviability = currentTime > 9 && currentTime < 17 ;
    return(
        <div>
            <h1>Doctor Aviability</h1>
            <h2>Is the doctor available: {doctorAviability ? "Yes" : "No"}</h2>
        </div>
    )
}
export default DoctorAviability;