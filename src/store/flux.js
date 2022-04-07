const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      publications: [],
      workersProfiles: [],
      userName: "",
    },
    actions: {
      getUserInfo: () => {
        fetch("http://localhost:5000/get-user-info", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => setStore({ userName : data[0].person_name }))
          .catch((err) => {
            console.error(err);
          });
      },
      readWorkersProfiles: () => {
        fetch("http://localhost:5000/get-workers")
          .then((res) => res.json())
          .then((data) => setStore({ workersProfiles: data }))
          .catch((err) => {
            console.error(err);
          });
      },
      readPetitions: () => {
        fetch("http://localhost:5000/create-publication")
          .then((res) => res.json())
          .then((data) => setStore({ publications: data }))
          .catch((err) => {
            console.error(err);
          });
      },
    },
  };
};

export default getState;
