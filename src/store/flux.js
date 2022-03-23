const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            loginInfo:[]
        },
        actions: {
            testEmail: (email) =>{
                return /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,3}.([a-z{2,3}])?/.test(email);
            },
            testPassword: (pass)=>{
                if( /[A-Z]/.test(pass) && /[a-z]/.test(pass) && /[0-9]/.test(pass) && /[$@#*-]/.test(pass) && pass.length >= 6 && pass.length <= 50){
                    return true
                }else{
                    return false
                }
            }
        }
    };
};

export default getState;