import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import axios from 'axios';

const HomeA = () => {
    const name = localStorage.getItem('name');
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };

      const handleLogout = () => {
        localStorage.removeItem('name');
        localStorage.removeItem('token');
        navigate('/');
      };

    return (
        <div>
      <nav className='menu'>
        <label className='logo'>Admin</label>
        <ul className={`menu_items ${menuOpen ? 'show' : ''}`}>
          <li className='active'><Link to={"../register"}>Registroar nuevo usuario</Link></li>
          <li><button onClick={handleLogout}>Cerrar Sesion</button></li>
        </ul>
        <span className={`btn_menu ${menuOpen ? 'hide' : ''}`} onClick={toggleMenu}>
  <FaBars />
</span>
      </nav>
      <div className='imagen'>
      <img src="perfil.png" />
      </div>
      <div className='textW'>
      Bienvenido {name || 'Invitado'}
      </div>

      </div>
    )
}

export default HomeA