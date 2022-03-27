import React from "react";



const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            publications: [],


        },
        actions: {
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