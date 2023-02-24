import React, { useEffect } from 'react'
import axios from 'axios'
function UseEffectTest() {

    const [posts, setPosts] = React.useState([])
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{   
            setPosts(response.data);
        })
    },[])

  return (
    <div>
        {posts.map((post)=>
            <h1 key={post.id}>{post.title}</h1>
        )};
    </div>   
  )
}

export default UseEffectTest