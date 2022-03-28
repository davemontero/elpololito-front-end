import React, {useEffect, useState} from 'react';


const WhoAmI = () => {

  const [quienSoy, setQuienSoy] = useState();
  
  useEffect(() => {
    fetch("http://localhost:5000/who_am_i", {
      method: 'get',
      headers: {
          
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
  .then(response => response.json())
  .then(data => setQuienSoy(data.email))

  ;
  
  });
   
   return <>
    <h1>Soy {quienSoy}</h1>
   </>
}

export default WhoAmI

