import http from "../http"
import jwtDecode from "jwt-decode"

class AuthService {
    login(username, password) {
        return http.post('/auth', {
            username: username,
            password: password
        }).then(response => {
            if (response.data.token) {
                localStorage.setItem('token', response.data.token)
            }

            return response.data;
        });
    }

    logout() {
        localStorage.removeItem('token');
    }

    isLoggedIn() {
        var token = localStorage.getItem('token');

        if (token) {
            var payload = jwtDecode(token)

            if (payload.exp * 1000 > Date.now()) {
                return true;
            }
        }
    
        return false;
    }
}

export default new AuthService();