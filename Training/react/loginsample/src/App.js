import { useState } from 'react'
function App() {
  const [username, setusername] = useState('')
  const [password, setPassword] = useState('')
  function onClick() {
    var req = { username: username, password: password }
    alert(req)
  }
}
