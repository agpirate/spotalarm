import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/layouts/layoutMain.css';

import ReusableFlex from "../components/containers/flexContainer_a"

const MainLayout = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="layoutMain">
     <header className="header" >

      <ReusableFlex   >
            <button onClick={toggleSidebar}>Open Sidebar</button>

             Header

        </ReusableFlex>
      </header>
     {/* side Bar - 0 */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        <div onClick={(e) => e.stopPropagation()} style={{'height':'100%','width':'30vw','backgroundColor':'black'}}>
          <nav>
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </nav>
        </div>
       
      </div>
     {/* side Bar - 1 */}

      <main className="content">
        <Outlet />
      </main>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default MainLayout;
