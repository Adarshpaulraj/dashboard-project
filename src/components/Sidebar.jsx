import React from 'react'
import { BsFillClipboardCheckFill,BsFillGridFill } from "react-icons/bs";
  function Sidebar() {
  return <>
               <ul className="navbar-nav bg-gradient-white sidebar sidebar-light accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<a className="sidebar-brand d-flex " href="index.html">
    <div className="sidebar-brand-icon rotate-n-15">
        
    </div>
    <div className="sidebar-brand-text mx-0 sales" style={{color:'blue'}} >medico Sales  </div>
</a>

{/* <!-- Divider --> */}
{/* <hr className="sidebar-divider my-0"/> */}

{/* <!-- Nav Item - Dashboard --> */}
 <li className="nav-item ">
    <a className="nav-link collapsed" href="#"   data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
           <img src="../public/images/element-3.svg" alt="" />
          <span style={{color:'blue'}}>Dashboard</span></a>
 </li>

{/* <!-- Nav Item - Utilities Collapse Menu --> */}
<li className="nav-item">
    <a className="nav-link collapsed" href="#"   data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
            <img src="../public/images/clipboard-tick.svg" alt="" />
         <span>Lab Test</span>
    </a>
     
</li>
<li className="nav-item">
    <a className="nav-link collapsed" href="#"   data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
            <img src="./public/images/calendar-tick.svg" alt="" />
         <span>Appointment</span>
    </a>
     
</li>
<li className="nav-item">
    <a className="nav-link collapsed" href="#"   data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
            <img src="../public/images/bag-tick-2.svg" alt="" />
         <span>Medicine Order</span>
    </a>
     
</li>
<li className="nav-item">
    <a className="nav-link collapsed" href="#"   data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
            <img src="../public/images/sms.svg" alt="" />
         <span>Message</span>
    </a>
     
</li>
<li className="nav-item">
    <a className="nav-link collapsed" href="#"   data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        <img src="../public/images/empty-wallet.svg" alt="" />
        <span>Payment</span>
    </a>
     
</li>
<li className="nav-item">
    <a className="nav-link collapsed" href="#"   data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
            <img src="../public/images/setting-2.svg" alt="" />
         <span>Settings</span>
    </a>
     
</li>
 </ul>
  </>
}

export default Sidebar