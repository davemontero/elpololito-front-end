import React from 'react';
import {Link} from 'react-router-dom';

const WhoAmI = () => {
    fetch("http://localhost:5000/who_am_i")
    .then(response => response.json())
    .then(data => console.log(data));


   return <>
    <h1>Hello World</h1>
        <div>
        
        </div>
   </>
}

export default WhoAmI