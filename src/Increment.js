import React, {useState} from 'react'

const Increment=()=> {
    const [count,setCount]=useState(0)
    // const increase=()=>{
    //     setCount(count+1)
    
    return (
        <>
            <h1>{count}</h1>
            {count<30 &&<button onClick={()=>setCount(count+1)}>click to increase value</button>}
            {count>0 &&<button onClick={()=>setCount(count-1)}>click to decrease value</button>}
        </>
    )
}

export default Increment
