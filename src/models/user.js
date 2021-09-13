export default class User{
    constructor(username, email, role, password, confirmPassword){
        this.username = username;
        this.password = password;
        this.role = role;
        this.email = email;
        this.confirmPassword = confirmPassword;
    }
}