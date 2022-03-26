import React from 'react';

const WhoAmI = () => {
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
   return <>
    <h1>Hello World</h1>
   </>
}

export default WhoAmI