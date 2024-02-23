import React from 'react'
import "../CSS/Table.css"

function User({mydata}) {
  return (
    <div>
        <table>
            <thead>
              <tr>
              <th>id</th>
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th>street</th>
              <th>city</th>
              <th>zipcode</th>
              <th>website</th>
              <th>Company name</th>
              <th>phone</th>
              </tr>
            </thead>
            <tbody>
              {
                mydata.map((res)=>{
                  return(
                    <tr key={res.id}>

                      <td>{res.id}</td>
                      <td>{res.name}</td>
                      <td>{res.username}</td>
                      <td>{res.email}</td>
                      <td>{res.address.street}</td>
                      <td>{res.address.city}</td>
                      <td>{res.address.zipcode}</td>
                      <td>{res.website}</td>
                      <td>{res.company.name}</td>
                      <td>{res.phone}</td>
                      
                    </tr>
                  )
                })
              }
            </tbody>
        </table>
    </div>

  )
}

export default User