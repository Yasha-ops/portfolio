import React from "react";
import HireMe from "./HireMe";

export default function NavBar(){
    return (
        <div className="flex-none mx-10 my-10 tracking-widest font-WorkSans">
            <div className="float-left uppercase item">
                Home
            </div>

            <div className="float-right item"> 
                <HireMe/>
            </div>
        </div>
    )
}
