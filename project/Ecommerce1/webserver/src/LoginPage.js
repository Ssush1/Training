import { useState } from 'react'
import "./style.css";
import {useNavigate} from "react-router-dom"

function LoginPage() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate =useNavigate();
  function 

  return (
    <div>
      <h1>Login</h1>
      <div>
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
          <button onClick={handleClick}> Login</button>
      </div>
    </div>
  )
}
