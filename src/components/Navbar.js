import React from 'react'
import '../style/style.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  const barToggle=(e)=>{
    if(document.getElementsByClassName('navitems')[0].style.display==='block'){

      document.getElementsByClassName('navitems')[0].style.display="none"
    }
    
    else{
      document.getElementsByClassName('navitems')[0].style.display="block"
  
    }
  }
  return (
    <>
    <div className="navbar"><Link to='/'>
      <div className="logo">
       NewsHub 
      </div></Link>
      <ul className='navitems'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/sports"><li>Sports</li></Link>
        <Link to="/technology"><li>Tech</li></Link>
        <Link to="/business"><li>Business</li></Link>
        <Link to="/entertainment"><li>Entertainment</li></Link>
        <Link to="/health"><li>Health</li></Link>
        <Link to="/science"><li>Science</li></Link>
      </ul>
      <div className="search">
        <input type="text"placeholder='search' />
        <button>Search</button>
      </div>
      <div className="bar" onClick={barToggle}><i className="fa-solid fa-bars-staggered"></i></div>
    </div>
    </>
  )
}

export default Navbar
