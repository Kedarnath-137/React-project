

import React from "react";
import './Player.css'
import Sidebar from './Sidebar';
import Body from "./Body";
import Footer from "./Footer";


function Player({spotify}){
    return(
        <div className="player">
            <div className="player_body">
                {/* it consists of sidebar & body */}
                <Sidebar/>
                <Body spotify = {spotify}/>

            </div>
            {/* footer */}

        <Footer/>

        </div>
    );
}

export default Player;