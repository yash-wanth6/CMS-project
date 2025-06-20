class UserService {
    constructor() {
        let data = localStorage.getItem("yup");
        if (data == null) {
            data = {
                users: []
            }
            localStorage.setItem("yup", JSON.stringify(data));
        }
        this.db = JSON.parse(localStorage.getItem("yup"));
    }

    isUserExists(email) {
        let found = this.db.users.find((obj) => obj.email === email)
        if (found === undefined) {
            alert("User not found");
            throw new Error("User not found");
        }
        return found;
    }

    authenticate(email, password) {
        let user = this.isUserExists(email);
        if (user.password === password) {
            return true;
        }
        else {
            alert("Wrond password");
            throw new Error("Wrond password");
        }
    }

    changeEmail(email, newEmail) {
        let user = this.isUserExists(email)
        if (user === undefined) {
            alert("Email not found");
            throw new Error("Email not found");
        }
        else {
            user.email = newEmail;
        }
        this.updateUser();
    }

    changePassword(email, newPassword) {
        let user = this.isUserExists(email);
        if (user === undefined) {
            alert("Email not found");
            throw new Error("Email not found");
        }
        else {
            user.password = newPassword;
        }
        this.updateUser();
    }

    newUser({ username, email, password, gender }) {
        let found = this.db.users.find((obj) => obj.email === email)
        console.log(found)
        if (found !== undefined) {
            alert("User Already Exists");
            throw new Error("User Already Exists");
        }
        else {
            let datas = {}, notes = [], tasks = [];
            this.db.users.push({ username, email, password, gender, datas, notes, tasks });
            this.updateUser();
        }
    }

    updateUser() {
        localStorage.removeItem("yup");
        localStorage.setItem("yup", JSON.stringify(this.db));
    }

    getDatas(email) {
        let user = this.db.users.find((obj) => obj.email === email);
        return user && Array.isArray(user.datas) ? user.datas : [];
    }

    getNotes(email) {
        let user = this.db.users.find((obj) => obj.email === email);
        return user.notes;
    }

    getTasks(email) {
        let user = this.db.users.find((obj) => obj.email === email);
        return user.tasks;
    }

    setTasks(email, tasks) {
        let user = this.db.users.find((obj) => obj.email === email);
        user.tasks = tasks
        this.updateUser();
    }
    setDatasAndValues(email, datas) {
        console.log(email);
        let user = this.db.users.find((obj) => obj.email === email);
        user.datas = datas;
        this.updateUser();
    }

    addNotes(email, content) {
        let user = this.db.users.find((obj) => obj.email === email);
        user.notes.push(content);
        this.updateUser();
    }

}

const userService = new UserService();
export default userService;