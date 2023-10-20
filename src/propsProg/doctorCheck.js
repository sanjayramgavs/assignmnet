import React from "react";
import DoctorAviability from "./doctorAviability";


function DoctorCheck(){
    const currentTime = new Date().getHours();
     
    return(
   <div>
         <h1>Doctor Check</h1>
         <DoctorAviability currentTime={currentTime}/>
   </div>
    );

}

export default DoctorCheck;