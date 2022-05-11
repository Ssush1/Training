
import { useState } from 'react';
import './appstyle.css'
function App(){
const [AnyVariable,setAnyVariable]=useState('');

  return(
    <div>
      <div class="container">
        <div class="outerdiv">
            <div>
                <h1>Login</h1>

                <div class="innerdiv">
                    <label> Username</label>
                    <input type="text" placeholder="username" />
                </div>

                <div class="innerdiv">
                    <label> Password</label>
                    <input type="text" placeholder="password" />
                </div>

                <div class="button">
                    <button>
                        Login
                    </button>
                </div>
            </div>
        </div>
    </div>
      <input type="text" value={AnyVariable} onChange={(e)=>(setAnyVariable(e.target.value))}/>
      {AnyVariable}
  </div>
  );
}
export default App;
/*******************************************************************************************************/



import { useState } from "react";

function App(){

  const [username, setUserName]=useState('');
  const [password, setPassword]=useState('');

  function handleClick(){
    var req={"username":username, "password":password};
    alert(JSON.stringify(req));
  }

  return(
    <div>
      <h1>Login</h1>
      <div>
        <label>Username</label>
        <input type='text' value={username} onChange={(e)=>{setUserName(e.target.value)}} />
      </div>
      <div>
        <label>Password</label>
        <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      </div><br />
      {username}<br />
      {password}<br />
      <button onClick={handleClick}>Login</button>
    </div>
  );
};
export default App;
