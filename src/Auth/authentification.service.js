// import {http} from '../axios-create.js';

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

export const authenticationService = {
    isLoggedIn,
    getJwt,
    getCompleteName,
    getCategory,
    getJwtRefresh
};