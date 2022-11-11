import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'
const Login = () => {
  const [state,dispatch]=useStateValue();
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            console.log(result);
            dispatch({
              type:actionTypes.SET_USER,
              user: result.user,
            })
        }).catch((error)=>{
            alert(error.message);
        })
    }
  return (
    <div className="login">
         <div className="login_container">
            <img src="https://i.ibb.co/XsKGqXJ/W2R.png" alt="" />
            <h1>Sign in to V-chat</h1>
            <p>Ask | Help | Communicate</p>
            <Button onClick={signIn}>Sign In with Google Account</Button>
         </div>
    </div>
  )
}

export default Login