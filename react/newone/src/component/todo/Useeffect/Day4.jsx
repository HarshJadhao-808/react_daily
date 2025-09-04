import React,{useState,useEffect} from "react";

const Day4 = () => {
    const [count,setcount]= useState(0)
    useEffect(() => {
        document.title=`it is changed ${count} times`
    },[count])
return (
    <>
    <h1>{count}</h1>
    <button onClick={() =>{count<10 ? setcount(count + 1):count}}>increase</button>
    <button onClick={() => {count<1 ? count :setcount(count - 1)}}>decrease</button>
    </>
)
}

export default Day4