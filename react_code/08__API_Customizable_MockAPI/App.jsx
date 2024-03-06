import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Register from './Pages/Register'
import Userlist from './Pages/Userlist'
import Update from './Pages/Update'
function App() {
  return (
    <div>
      <Router>
        <nav class="navbar bg-primary navbar-expand-lg " data-bs-theme="dark">
          <div class="container-fluid">
     
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link to="/" class="nav-link">REGISTER</Link>
                <Link to="/userlist" class="nav-link">USER LIST</Link>            
               </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path='/' element={<Register></Register>}></Route>
          <Route   path='/userlist' element={<Userlist></Userlist>}></Route>
          <Route   path='/update' element={<Update />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
