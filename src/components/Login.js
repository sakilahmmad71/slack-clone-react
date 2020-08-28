import React from 'react'
import '../styles/Login.css'
import { auth, provider } from '../firebase.config'
import { useStateValue } from '../context/StateProvider'
import { actionTypes } from '../context/reducer'

import slackImage from '../images/slack.svg'
import { Button } from '@material-ui/core'

const Login = () => {
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) =>
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            )
            .catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src={slackImage} alt="" />
                <h1>Sign In to Slack-clone</h1>
                <p>slack.clone.app</p>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login
