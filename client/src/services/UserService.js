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
            alert("User not found");
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
            alert("Wrond password");
            throw new Error("Wrond password");
        }
    }

    changeEmail(email,newEmail) {
        let user = this.isUserExists(email)
        if(user===undefined) {
            alert("Email not found");
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
            alert("Email not found");
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
            alert("User Already Exists");
            throw new Error("User Already Exists");
        }
        else {
            let values = [];
            let datas = [];
            this.db.users.push({username,email,password,gender,values,datas});
            this.updateUser();
        }
    }

    updateUser() {
        localStorage.removeItem("yup");
        localStorage.setItem("yup",JSON.stringify(this.db));
    }

    getDatas(email) {
        console.log(email);
        let user = this.db.users.find((obj)=> obj.email === email);
        return user && user.datas ? user.datas : [];
    }

    getValues(email) {
        let user = this.db.users.find((obj)=> obj.email === email);
        return user && user.values ? user.values : [];
    }

    setDatasAndValues(email,datas,values) {
        console.log(email);
        let user = this.db.users.find((obj) => obj.email === email);
        user.datas = datas;
        user.values = values;
        this.updateUser();
    }

}

const userService = new UserService();
export default userService;