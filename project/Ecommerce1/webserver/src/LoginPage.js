import './style.css'

import axios from 'axios'

import { useState } from 'react'

import { ReactSession } from 'react-client-session'

import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const [username, setUserName] = useState('')

  const [password, setPassword] = useState('')

  const [errormessage, setErrorMessage] = useState('')

  const navigate = useNavigate()

  function handleClick() {
    var req = { username: username, password: password }

    var url = 'http://localhost:8000/uservalidate'

    var header = {}

    //console.log(req)

    //console.log(url)

    //console.log(header)

    axios
      .post(url, req, header)
      .then((res) => {
        console.log(res.data.token)
        if (res.data.token === "") {
          setErrorMessage('Error in Username Or Password')
        } else {
          setErrorMessage('Success')

          ReactSession.set('username', username)
          ReactSession.set('password', password)
          ReactSession.set('token', res.data.token)

          navigate('/Dashboard')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function newClick() {
    navigate('/SignUp')
  }

  return (
    <div>
      <h1>LOGIN</h1>

      <div>
        <label>Username</label>

        <input
          value={username}
          onChange={(e) => {
            setUserName(e.target.value)
          }}
          type="text"
        />
      </div>

      <div>
        <label>Password</label>

        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          type="password"
        />
      </div>

      <br />

      <button onClick={handleClick}>LOGIN</button>
      <p>{errormessage}</p>
      <p onClick={newClick} className="newuser">
        NewUser?
      </p>
    </div>
  )
}

export default LoginPage
