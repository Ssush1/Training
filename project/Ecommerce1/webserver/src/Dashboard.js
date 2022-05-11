import './style.css'

import { useEffect,useState } from 'react'
import{}


function Dashboard() {
  var a = [
    { id: 1, txtprodname: 'Sample1', Rate: '200', Tax: '15' },
    { id: 2, txtprodname: 'Sample2', Rate: '800', Tax: '15' },
    { id: 3, txtprodname: 'Sample3', Rate: '300', Tax: '15' },
  ]

  const[Productlist,setProductlist]=useState([
    { id: 1, txtprodname: 'Sample1', Rate: '200', Tax: '15' },
    { id: 2, txtprodname: 'Sample2', Rate: '800', Tax: '15' },
    { id: 3, txtprodname: 'Sample3', Rate: '300', Tax: '15' },
    
  ]);
}
