import React,{useState,useEffect} from "react";

const Fetch = () => {
    const [data,setdata]=useState([])
    const [count,setcount]=useState(0)
    useEffect(()=> {
       const getdata = async () => {
        let a =await fetch("https://jsonplaceholder.typicode.com/posts");
        let res = await a.json()
        setdata(res)
       }
       getdata()

    },[count])
    return (
        <>
        {data.map((el)=> 
        <>
        <h3>{el.title}</h3>
        </>
        )}
        </>
    )
    
}

export default Fetch