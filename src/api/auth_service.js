import axios from 'axios';
const API_URL = 'http://localhost:8081/api/auth';

class AuthService {
    login(user){
        var body = {
            "username": user.username,
            "password": user.password
        }


        return axios.post(API_URL + '/signin', body,{
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => {
            console.log(res);
            if(res.data.token){
                localStorage.setItem('user', JSON.stringify(res.data))
            }
            return res.data;
        }).catch(err => console.warn(err.response))
    }
    logout(){
        localStorage.removeItem('user');
    }
    register(user){
        return axios.post(API_URL+'/signup', {
            "username":user.username,
            "email":user.email,
            "password": user.password,
            "role":[]

        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => console.warn(res))
    }
}

export default new AuthService();

