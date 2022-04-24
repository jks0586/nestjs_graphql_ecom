import rest from './rest';


class AuthService{
    SignUp(data){
        return rest.post('user/signup',data);
    }
    SignIn(data){
        return rest.post('user/signin',data);
    }
}

export default new AuthService();
