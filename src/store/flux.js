const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            publications: [],
            workersProfiles: [],
            auth: ""
        },
        actions: {
            isAuth: () => {
                
            },
            readWorkersProfiles: () => {
                fetch("http://localhost:5000/get-workers")
                .then(res => res.json())
                .then(data => setStore({workersProfiles:data}))
                .catch(err => {
                        console.error(err);
                    });

            },


            readPetitions: () => {
                fetch("http://localhost:5000/create-publication")
                .then(res => res.json())
                .then(data => setStore({publications:data}))
                .catch(err => {
                        console.error(err);
                    });
            }
        }
    };
};

export default getState;