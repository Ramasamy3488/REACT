import React, { useEffect, useState } from 'react'
import  axios from "axios"
import "./App.css"

function App() {
   const [apidata,setApiData] = useState([])

  //  fetch("https://jsonplaceholder.typicode.com/posts/")
  //  .then((res)=>{
  //   return res.json()
  //  })
  //  .then((res)=>{
  //   console.log(res)
  //  })

  useEffect(()=>{
   axios.get("https://jsonplaceholder.typicode.com/posts/")
   .then((res)=>{
        setApiData(res.data)
        console.log(res.data);
   })
  },[])
  return (
    <div>
         <div className="datas">
              <table>
                 <thead>
                  <th>USER ID</th>
                  <th>ID</th>
                  <th>TITLE</th>
                  <th>BODY</th>
                 </thead>
                 <tbody>
             
                        {
                            apidata.map((r)=>{
                                return(
                                  <tr key={r.id}>
                                    <td>{r.userId}</td>
                                    <td>{r.id}</td>
                                    <td>{r.title}</td>
                                    <td>{r.body}</td>
                                  </tr>
                                )
                            })
                        }
                   
                 </tbody>
              </table>
         </div>
    </div>
  )
}

export default App
