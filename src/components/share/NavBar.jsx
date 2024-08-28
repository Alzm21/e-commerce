import React from 'react'
import { Link } from 'react-router-dom'
import './styles/navBar.css'
import { FiUser } from "react-icons/fi";
import { BsArchive } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";

const NavBar = () => {

  return (
    <header className='navbar'>
        <div>
          <h1 className='navbar_title'><Link to='/'>e-commerce</Link></h1>
        </div>
        <ul className='navbar_list'>
            <li className='navbar_item'><Link to='/login'><FiUser style={{color: 'var(--icon-color)', fontSize: '1.4rem'}}/></Link></li>
            <li className='navbar_item'><Link to='/purchases'><BsArchive style={{color: 'var(--icon-color)', fontSize: '1.4rem'}}/></Link></li>
            <li className='navbar_item'><Link to='/cart'><RiShoppingCartLine style={{color: 'var(--icon-color)', fontSize: '1.4rem'}}/></Link></li>
        </ul>

    </header>
  )
}

export default NavBar