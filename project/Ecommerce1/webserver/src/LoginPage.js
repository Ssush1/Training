import axios from 'axios'
import { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  function newclick(e) {
    e.preventDefault()
    navigate('./SignupPage')
  }

  function handleclick(e) {
    e.preventDefault()
    let req = { username: username, password: password }
    let url = 'http://localhost:8000/uservalidate'
    let header = {}
    
    axios.post(url, req, header).then((res) => {
      console.log(res)
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <div className="textbox">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value)
          }}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </div>
      <br></br>
      <div>
        <button className="login" onClick={handleclick}>
          Login
        </button>
      </div>
      <div>
        <p
          onClick={(e) => {
            newclick(e)
          }}
          className="link"
        >
          New User?
        </p>
      </div>
    </div>
  )
}
export default LoginPage
