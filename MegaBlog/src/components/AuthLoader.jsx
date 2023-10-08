himport React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Login from './Login';

//'authentication' here is more abt authorization of a user to access a component
// 'authStatus' is about proper authentication ie user is loggedIn or not.
const Protected = ({children, authentication = true}) => {
    const navigate = useNavigate();
    const [loader, setLoader] =  useState();
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        if(authentication && authStatus !== authentication)
        {
            navigate('/login');
        }
        else if(!authentication && authStatus !== authentication)
        {
            navigate('/');
        }
        setLoader(false);
    }, [authStatus, authentication, navigate])
  return loader ? <h3>loading...</h3> : <>{children}</>;
}

export default Protected
