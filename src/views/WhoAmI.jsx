import React, {useEffect, useState} from 'react';


const WhoAmI = () => {

  useEffect(() => {
    fetch("http://localhost:5000/who_am_i", {
      method: 'GET',
      headers: {
          
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
  .then(response => response.json())
<<<<<<< HEAD
  .then(data => console.log(data))
  ;

  console.log(localStorage);
=======
  
>>>>>>> 935f51f466b391a084c5ba18f54b5293ff79f2c2
  });


    console.log(localStorage);
   return <>
    <h1>Soy alguien</h1>
   </>
}

export default WhoAmI