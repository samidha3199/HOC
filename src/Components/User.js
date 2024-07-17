import { useEffect, useState } from "react"

const User = ({name,location,number})=>{

    const [count, setCount] = useState(0);

    const [count1, setCount1] = useState(1);

    useEffect(()=>{
        // API calls
    },[])

    return(
        <>
            <div className="user__card">
                <h1>Count: {count}</h1>
                <h1>Count1: {count1}</h1>
                <button onClick={()=>{
                    setCount(count + 1)
                }}>Click me</button>
                <button onClick={()=>{
                    setCount1(count1 - 1)
                }}>Click me</button>
                <h3>Name: {name}</h3>
                <p>Location: {location}</p>
                <p>Contact No. {number}</p>
            </div>
        </>
    )
}

export default User