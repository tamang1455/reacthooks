import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

const Datafetch = () => {
    const [posts, setPost] = useState([])
    const [limit, setLimit] = useState(10)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res.data)
                setPost(res.data)
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <>
            {posts.slice(0, limit).map(p => {
                return (
                    <Fragment key={p.id}>
                        <li>{p.title}</li>
                        <p>{p.body}</p>
                    </Fragment>
                )
            })}

            {limit<posts.length &&<button style={{backgroundColor:'orange'}} onClick={()=>setLimit(limit+10)}>Load More</button>}
        </>
    )
}

export default Datafetch
