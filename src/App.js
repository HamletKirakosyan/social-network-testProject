import React, { useContext, useState, useRef, useEffect } from "react"
import Header from "./header/Header";
import Home from "./pages/home/Home";

import  PersonIcon from '@mui/icons-material/Person'; 
import PersonAddIcon from '@mui/icons-material/PersonAdd';


function App() {

    return (
        <div>     
            <Home />
            <Header />
            <PersonIcon />
            <PersonAddIcon />
        </div>
    )
}

export default App;