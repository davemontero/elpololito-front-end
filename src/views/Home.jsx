import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


const Home = () => {
    
    console.log(localStorage);
    

    return <>
     <h1>Hello World</h1>
        <div>
        <Link className="nav-link" to="/who_am_i">WHO AM I AAAAAA</Link>
        </div> 
        
    </>


       
    
}

export default Home