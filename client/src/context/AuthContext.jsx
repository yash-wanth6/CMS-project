import React, { Children, createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import userService from '../services/UserService';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const AuthContext = createContext();

export function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [gender, setGender] = useState('');
    //Dashboard Variables
    const [totalTasks, setTotalTasks] = useState(0);
    const [finished, setFinished] = useState(0);

    function login() {
        try {
            if (userService.authenticate(email, password)) {
                setIsAuth(true);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    function logout() {
        setIsAuth(false);
    }

    function signup() {
        try {
            userService.newUser({ username, email, password, gender });
            setIsAuth(true);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (isAuth) navigate('/dashboard/home');
        else navigate('/');
    }, [isAuth]);

    return (
        <AuthContext.Provider value={{ isAuth, username, email, password, gender, login, logout, signup, setUsername, setPassword, setEmail, setGender, setIsAuth, totalTasks, setTotalTasks,finished, setFinished}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
