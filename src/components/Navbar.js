import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

const Navbar = () => {
  return (
    <ul style = {{paddingTop: '1rem', paddingRight:'4rem', fontSize:'1.4rem'}} class="nav justify-content-end">
        <li class="nav-item" style={{ marginRight: '1rem' }}>
            <a style = {{color:'white'}} class="nav-link active" href="/">Home</a>
        </li>
        <li class="nav-item" style={{ marginRight: '1rem' }}>
            <a  style = {{color:'white'}} class="nav-link" href="/NewOwner">New Founder</a>
        </li>
        <li class="nav-item">
            <a style = {{color:'white'}} class="nav-link" href="/ExistingOwner">Existing Founder</a>
        </li>
    </ul>
  )
}

export default Navbar
