// @ts-nocheck
import React from 'react';
// @ts-ignore

import './style.css'



const SidebarHeader = () => {

    return (
      <div className="header-buttons">

          <span className="icon-Hamburger-Menu" onClick={()=>console.log('Hamburger-Menu')}></span>

          <span className="icon-Logo"></span>
          <input  className="sidebar-Search-Field" type="text" placeholder="   Search" />
      </div>
    );
}

export default SidebarHeader;
