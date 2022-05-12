
import axios from "axios";
import { ReactSession } from "react-client-session";
import { useNavigate } from "react-router-dom";
import './style.css'
import { useEffect,useState } from 'react'

function Dashboard() {
  const [sample, setSample]=useState('')
  const [usr,setUsrName]=useState('')
  const navigate=useNavigate();
const [Productlist,setProductlist]=useState([ { id: 1, txtprodname: 'Sample1', Rate: '200', Tax: '15' },
{ id: 2, txtprodname: 'Sample2', Rate: '800', Tax: '15' },
{ id: 3, txtprodname: 'Sample3', Rate: '300', Tax: '15' },
])
//value hardcoded to test the navigation and data display

useEffect(()=>{
  if(ReactSession.get("username")==undefined)
{navigate('/')}
}

setUsrName(ReactSession.get("user"))
  var a = [
    -
    { id: 1, txtprodname: 'Sample1', Rate: '200', Tax: '15' },
    { id: 2, txtprodname: 'Sample2', Rate: '800', Tax: '15' },
    { id: 3, txtprodname: 'Sample3', Rate: '300', Tax: '15' },
  ]

  const[Productlist,setProductlist]=useState([
    { id: 1, txtprodname: 'Sample1', Rate: '200', Tax: '15' },
    { id: 2, txtprodname: 'Sample2', Rate: '800', Tax: '15' },
    { id: 3, txtprodname: 'Sample3', Rate: '300', Tax: '15' },
    
  ]);

return(
  <div>

  </div>
)


}
export default Dashboard;
