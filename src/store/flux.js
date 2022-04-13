const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      publications: [],
      workersProfiles: [],
      username: "",
      id: 0,
      mail: "",
      EmailIsValid:false
    },
    actions: {
      readWorkersProfiles: () => {
        fetch("http://localhost:5000/get-workers")
          .then(res => res.json())
          .then(data => setStore({ workersProfiles: data }))
          .catch(err => {
            console.error(err);
          });
      },
      readPetitions: () => {
        fetch("http://localhost:5000/create-publication")
          .then(res => res.json())
          .then(data => setStore({ publications: data }))
          .catch(err => {
            console.error(err);
          });
      },
      getUserInfo: () => {
        fetch("http://localhost:5000/get-user-info", {
          method: 'GET',
          headers: {

            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
          },
        })
          .then(response => response.json())
          .then(data => setStore({
            username: data[0].name,
            id: data[0].id,
            mail: data[0].mail
          }));
      },
      EmailExist: (email) => {
        fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=07f34a6254f244dea890b1f0eeccbc1c&email=${email}`, {
          "method": "GET",
          "headers": {
            "Content-type": "application/json"
          }
        })
          .then(response => 
            response.json()
          ).then((data)=>setStore({EmailIsValid : data.is_smtp_valid.value}))
          .catch(err => {
            console.log(err);
          });
      } 

    }
  };
};

export default getState;
