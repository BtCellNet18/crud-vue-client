import http from "../http";
import authHeader from "./AuthHeader";

const url = '/users';

class UserService {
    getAll() {
        return http.get(url, { headers: authHeader() });
    }

    getById(id) {
        return http.get(`${url}/${id}`, { headers: authHeader() });
    }

    create(params) {
        return http.post(url, params);
    }

    update(id, params) {
        return http.put(`${url}/${id}`, params, { headers: authHeader() });
    }

    delete(id) {
        return http.delete(`${url}/${id}`, { headers: authHeader() });
    }
}

export default new UserService();