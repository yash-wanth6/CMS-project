class UserService {
    constructor() {
        let data = localStorage.getItem("yup");
        if(data == null) {
            data = {
                users:[]
            }
            localStorage.setItem("yup",JSON.stringify(data));
        }
        this.db = JSON.parse(localStorage.getItem("yup"));
    }

    isUserExists(email) {
        let found = this.db.users.find((obj) => obj.email===email)
        if(found===undefined) {
            throw new Error("User not found");
        }
        return found;
    }

    authenticate(email,password) {
        let user = this.isUserExists(email);
        if(user.password === password) {
            return true;
        }
        else {
            throw new Error("Wrond password");
        }
    }

    changeEmail(email,newEmail) {
        let user = this.isUserExists(email)
        if(user===undefined) {
            throw new Error("Email not found");
        }
        else {
            user.email = newEmail;
        }
        this.updateUser();
    }

    changePassword(email,newPassword) {
        let user = this.isUserExists(email);
        if(user===undefined) {
            throw new Error("Email not found");
        }
        else {
            user.password = newPassword;
        }
        this.updateUser();
    }

    newUser({username,email,password,gender}) {
        let found = this.db.users.find((obj) => obj.email===email)
        console.log(found)
        if(found!== undefined) {
            throw new Error("User Already Exists");
        }
        else {
            this.db.users.push({username,email,password,gender});
            this.updateUser();
        }
    }

    updateUser() {
        localStorage.removeItem("yup");
        localStorage.setItem("yup",JSON.stringify(this.db));
    }

}

const userService = new UserService();
export default userService;