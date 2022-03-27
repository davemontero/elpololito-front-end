import React, {useEffect, useState} from 'react';


const WhoAmI = () => {

  useEffect(() => {
    fetch("http://localhost:5000/who_am_i", {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer ${localStorage.getItem('jwt')}",
      },
    })
  .then(response => response.json())
  
  });


    console.log(localStorage);
   return <>
    <h1>Soy alguien</h1>
   </>
}

export default WhoAmI