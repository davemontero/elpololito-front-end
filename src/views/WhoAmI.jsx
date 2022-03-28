import React, {useEffect, useState} from 'react';


const WhoAmI = () => {

  const [quienSoy, setQuienSoy] = useState();
  
  useEffect(() => {
    fetch("http://localhost:5000/who_am_i", {
      method: 'GET',
      headers: {
          
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
  .then(response => response.json())
  .then(data => console.log(data))

  ;
  
  });
   
   return <>
    <h1>Soy {quienSoy.resp}</h1>
   </>
}

export default WhoAmI
