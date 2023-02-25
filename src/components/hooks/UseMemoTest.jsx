import React,{useMemo,useState,useEffect} from 'react'
import axios from 'axios';

function UseMemoTest() {
    const [data,setData] = useState([]);
    const [color,setColor] = useState('red');
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            setData(response.data);
        })
        
    },[]);



    const longestPost = (data) => {
        if(!data)
            return null;
        let longest = '';
        data.map((post,index) => {
            if(post.title.length > longest.length)
                longest=post.title;
        });
        console.log('function worked');
        
        return longest;
    }
    const getLongestPost = useMemo(() => longestPost(data),[data]);
  return (
    <div>
        <h1 onClick={(e)=>{
            color === 'red'? setColor('green') : setColor('red');
        }}  style={{
            color:color
        }}>{getLongestPost}</h1>
    </div>
  )
}

export default UseMemoTest