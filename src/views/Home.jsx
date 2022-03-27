import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import HomeGrid from '../components/HomeGrid';


const Home = () => {
    
    useEffect(() => {
        fetch("http://localhost:5000/home", {
          method: 'get',
          headers: {
              
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
          },
        })
      .then(response => response.json())
      .then(data => console.log(data))
      ;
    
      console.log(localStorage);
      });
    

    return <>
     <h1>Hello World</h1>
        <div>
        <Link className="nav-link" to="/who_am_i">WHO AM I AAAAAA</Link>
        </div> 
        <div>
            <HomeGrid/>
        </div>
        
    </>


       
    
}

export default Home