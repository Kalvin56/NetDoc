import axios from "axios";
import { config } from "./config";


const http =
axios.create({
    baseURL: config.apiUrl,
    headers: {
        'Authorization': localStorage.getItem('access_token') ? "JWT " + localStorage.getItem('access_token') : null,
        "Content-type": "application/json"
    }
});

http.interceptors.response.use(
    response => response,
    error => {
        const originalRequest = error.config;

        // Prevent infinite loops
        if (error.response.status === 401 && originalRequest.url === config.apiUrl+'refresh') {
            window.location.href = '/';
            return Promise.reject(error);
        }

        if (error.response.status === 401) 
            {
                const refreshToken = localStorage.getItem('jwt');

                if (refreshToken){
                    const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

                    // exp date in token is expressed in seconds, while now() returns milliseconds:
                    const now = Math.ceil(Date.now() / 1000);
                    console.log(tokenParts.exp);

                    if (tokenParts.exp > now) {
                        return http
                        .post('refresh', {jwtrefresh: refreshToken})
                        .then((response) => {
            
                            localStorage.setItem("complete_name", response.data.complete_name);
                            localStorage.setItem("jwt", response.data.jwt);
                            localStorage.setItem("jwt_refresh", response.data.jwt_refresh);
            
                            http.defaults.headers['Authorization'] = "JWT " + response.data.jwt;
                            originalRequest.headers['Authorization'] = "JWT " + response.data.jwt;
            
                            return http(originalRequest);
                        })
                        .catch(err => {
                            console.log(err)
                        });
                    }else{
                        console.log("Refresh token is expired", tokenParts.exp, now);
                        window.location.href = '/';
                    }
                }else{
                    console.log("Refresh token not available.")
                    window.location.href = '/';
                }
        }
    
    
    // specific error handling done elsewhere
    return Promise.reject(error);
}
);


export {http};


    