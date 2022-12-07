import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../index.css';
import Header from './Header';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars" style={{ textDecoration: 'none', color: '#fff' }}>
          <FaBars onClick={showSidebar} />
        </Link>
        <Header />
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars" style={{ textDecoration: 'none', color: '#fff' }}>
              <AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path} style={{ textDecoration: 'none', color: '#fff' }}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
