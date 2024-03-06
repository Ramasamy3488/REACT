import React, { useState } from 'react'
import axios from "axios";
function Register() {
    const [username,setuserName] = useState("")
    const [email,setEmail] = useState("")
    const [address,setAddress] = useState("")
    const [phone,setPhone] = useState("")
    const [role,setRole] = useState("")

    const addFormData = async(e)=>{
      e.preventDefault();
      const formDatas = {username,email,address,phone,role}
     await axios.post("https://65e6ebab53d564627a8d5aca.mockapi.io/details" ,formDatas)
      .then((res)=>{
          console.log(res , "Data Submitted...");
      }).catch((err)=>{
          console.log(err);
      })
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                 
                 <div className="col-md-6 offset-md-3 py-5">
                    <h2>Register Details</h2>
                     <form onSubmit={addFormData}>
                        <div className='form-group mb-2'>
                            <input type="text"  className='form-control'
                             placeholder='Enter Username' onChange={e=>setuserName(e.target.value)}/>
                        </div>

                        <div className='form-group mb-2'>
                            <input type="email"  className='form-control' 
                            placeholder='Enter email' onChange={e=>setEmail(e.target.value)}/>
                        </div>
                        <div className='form-group mb-2'>
                            <input type="text"  className='form-control' 
                            placeholder='Enter address' onChange={e=>setAddress(e.target.value)}/>
                        </div>

                        <div className='form-group mb-2'>
                            <input type="text"  className='form-control' 
                            placeholder='Enter phone' onChange={e=>setPhone(e.target.value)}/>
                        </div>

                        <div className='form-group mb-2'>
                            <input type="text"  className='form-control'
                             placeholder='Enter Role' onChange={e=>setRole(e.target.value)}/>
                        </div>

                        <div className='form-group mb-2'>
                            <button type="submit" class="btn btn-primary">REGISTER </button>
                        </div>
                     
                     </form>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Register
