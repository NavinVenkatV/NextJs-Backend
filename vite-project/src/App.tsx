import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [loading,setLoading] = useState(true)
  const [data, setData] = useState({
    name:"",
    email:""
})

"client server rendering we are talking to backend not server fetching"
useEffect(()=>{
 axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details')
  .then(res =>{
    setData(res.data);
    setLoading(false)
  })
})

if(loading){
  return("Loading.....")
}

  return (
    <div>
      {data.name}
      {data.email}
    </div>
  )
}

export default App
