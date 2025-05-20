import React from 'react'
import { Link } from 'react-router-dom'
import {useCart} from "../context/CartContext"
import { useAuth } from '../context/AuthContext';



const Navbar = () => {

  const {cartItems} = useCart()
  const{user, signIn, signOut} = useAuth()
  

  return (

    <>
    <div className = "navSection">
      <div className = "title" >
        <Link to = "/" >
        <h2>ShopEase</h2>
        </Link>
        
      </div>
      <div className = "search">
        <input type = "text" 
        placeholder = "Search...." 

          />
      </div>
      <div className="user">
        {user ? (
          <>
            <span>Welcome, {user}</span>
            <button onClick={signOut} style={{ marginLeft: "10px" }}>
              Sign Out
            </button>
          </>
        ) : (
          <button onClick={() => signIn(prompt("Enter your username:"))}>
            Sign In/Sign Up
          </button>
        )}
        <Link to = "/cart">
        <div className = "Cart" >
          Cart
          <span>
            {cartItems.length}
          </span>
        </div>
        </Link>
        
      </div>

    </div>
    <div className = "subMenu" >
        <ul>
          <Link to = "/Sarees">
          <li>Sarees</li>
          </Link>
          <Link to = "/Kurtas">
          <li>Kurtas</li>
          </Link> 
          <Link to = "/Shirts">
          <li>Shirts</li>
          </Link>
          <Link to = "/Frocks">
          <li>Frocks</li>
          </Link>
          <Link to = "/Jeans">
          <li>Jeans</li>
          </Link>
          <Link to = "/Western">
          <li>Western</li>
          </Link>
          
        </ul>
        
      </div>
    </>
    

  )
}

export default Navbar