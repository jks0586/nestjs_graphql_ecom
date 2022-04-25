import rest from './rest';
class UsersService{
    userslist(data){
        return rest.get('user');
    }
    
}

export default new UsersService();
