import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router';

export default function PrivateRoutes({ children }) {
    const { isAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    if(!isAuth) {
        navigate('/');
    }
    else {
        return {children};
    }
}
