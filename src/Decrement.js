import React, {useState} from 'react'


// const decrease=()=>{
//     setCount(count-1)
// }
const Decrement=()=> {
    const [count, setCount]= useState(0)
    return (
        <>
            <h1>{count}</h1>
            <button onClick={()=>count>0 && setCount(count-1)}>click to decrease value</button>
        </>
    )
}

export default Decrement
