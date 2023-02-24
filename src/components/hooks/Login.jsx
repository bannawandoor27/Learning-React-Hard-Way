import React,{useContext} from 'react'
import { Appcontext } from './ContextTest'


function Login() {
    const {username,setUsername} = useContext(Appcontext);

  return (
    <div>
        <h1>hahhaha</h1>
        <h1 style={{
            color: 'red',
        }}> {username}</h1>
        <button onClick={()=>{
            setUsername('bannaaaaa');
        }}>banna</button>
    </div>
  );
}

export default Login