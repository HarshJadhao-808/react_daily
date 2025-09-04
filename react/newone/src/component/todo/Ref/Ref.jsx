import React,{useRef, useState} from "react";

const Ref = () => {
    const countref=useRef(0)
    const [show,setshow]=useState(false)

    const increasefun = () => {
        countref.current +=1
        
    }
    const Render = () => {
        setshow(!show)
    }
    console.log(countref);

    return (
        <div>
            <h1>Hello</h1>
            <h2>This is the current value {countref.current}</h2>
            <button onClick={increasefun()}>increase</button>
            <button onClick={Render}>render</button>
        </div>
    )
}

export default Ref