import React, { useEffect, useState } from 'react';



const WhoAmI = () => {
  const [quienSoy, setQuienSoy] = useState();
  console.log(quienSoy)

  useEffect(() => {
    fetch("http://localhost:5000/who_am_i", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    })
      .then(response => response.json().then(console.log(response)))
      .then(data => setQuienSoy(data))
      console.log(quienSoy)

      ;

  },[]);
  return <>
    <h1>Soy {quienSoy}</h1>
  </>
}

export default WhoAmI

