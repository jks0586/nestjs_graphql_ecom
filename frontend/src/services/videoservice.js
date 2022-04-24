import rest from './rest';


class VideoService{
    SignUp(data){
        return rest.post('user/signup',data);
    }
    SignIn(data){
        return rest.post('user/signin',data);
    }
}

export default new VideoService();
