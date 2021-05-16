import {http} from '../axios-create.js';
function getJwt() {
    return localStorage.getItem('jwt');
}

function isLoggedIn() {
    return !!getJwt();
}

function getCompleteName() {
    return localStorage.getItem('complete_name');
}

function getCategory() {
    return localStorage.getItem('category');
}

function getJwtRefresh() {
    return localStorage.getItem('jwt_refresh');
}

function logout(){
    http.post('logout', {"jwt_refresh" : localStorage.getItem('jwt_refresh')})
    .then((response) => {
        if(response.status === 200){
            console.log(response.data.message);
            localStorage.clear();
            window.location.href = '/';
        }
    })
    .catch((error) => {
        if(error.response.data.message){
            console.log(error.response.data.message);
        }else{
            console.log(error);
        }
    });
}

export const authenticationService = {
    isLoggedIn,
    getJwt,
    getCompleteName,
    getCategory,
    getJwtRefresh,
    logout
};