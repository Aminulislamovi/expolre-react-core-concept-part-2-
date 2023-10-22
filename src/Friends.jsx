 
 import { useEffect, useState } from 'react'
import './friends.css'
import friend from './friend';
 export default function Friends(){
    const [] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>console.log(data))

    },[])


    return(
        <div className='box'>
            <h3 >Friends:{friends.length} </h3>
            {
                friends.map(friend friend={friend}><friend></friend> )
            }
        </div>
    )
}

// 1. state declare kora  to hold data
// 2.use effect with dependency array