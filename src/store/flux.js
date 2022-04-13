const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      publications: [],
      workersProfiles: [],
      userinfo:[]
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
          .then(data => setStore({ userinfo:data[0]}));
      }

    }
  };
};

export default getState;
