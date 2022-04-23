import React, { useContext, useState, useRef, useEffect } from "react"
import Products from "./components/news/Products";
import SingleProduct from "./components/news/SingleProduct";
import Home from "./pages/home/Home";

import  PersonIcon from '@mui/icons-material/Person'; 
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + 1, 
                showText: state.showText}
                case "toggleShowText":
            return {count: state.count,
                showText: !state.showText}
        default:
            return state;
    }
}


function App() {
    /* const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(true);
    */
   const [state, dispatch] = useReducer(reducer,  
   {count: 0, showText: true})

    return (
        <div>     
          <h1>{state.count}</h1>
          <button
            onClick={() => {
               /*  setCount(count + 1);
                setShowText(!showText); */
                dispatch({type: "INCREMENT"});
                dispatch({type: "toggleShowText"});
            }}
          >
          Click here
          </button>

         
          {state.showText && <p>This a text</p>}
          {state.showText && <p>This a text</p>}
          {state.showText && <p>This a text</p>}
          {state.showText && <p>This a text</p>}
          {state.showText && <p>This a text</p>}
          {state.showText && <p>This a text</p>}
          {state.showText && <p>This a text</p>}
          {state.showText && <p>This a text</p>}
          {state.showText && <p>This a text</p>}
          {state.showText && <p>This a text</p>}
          {state.showText && <p>This a text</p>}
          {state.showText && <p>This a text</p>}
          {state.showText && <p>This a text</p>}
          {state.showText && <p>This a text</p>}
          {state.showText && <p>This a text</p>}
          {state.showText && <p>This a text</p>}
          {state.showText && <p>This a text</p>}
          {state.showText && <p>This a text</p>}
          {state.showText && <p>This a text</p>}
          {state.showText && <p>This a text</p>}
          {state.showText && <p>This a text</p>}
          {state.showText && <p>This a text</p>}
        </div>
    )
}

export default App;