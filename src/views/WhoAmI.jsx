import React, {useEffect, useState} from 'react';


const WhoAmI = () => {

  useEffect(() => {
    fetch("http://localhost:5000/who_am_i", {
      method: 'get',
      headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer ${localStorage.getItem('jwt')}",
      },
    })
  .then(response => response.json())
  .then(data => console.log(data));

  console.log(localStorage);
  });


    console.log(localStorage);
   return <>
    <h1>Soy alguien</h1>
   </>
}

export default WhoAmI