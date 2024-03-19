import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dropdown(props) {
  const navigate=useNavigate();
  // for styling 
  const className=`absolute ${props.isSmallScreen?"w-screen":"w-"} h-96 top-custom-top ${props.isSmallScreen?"right-0":"right-2"} bg-slate-900 ${props.isSmallScreen? (props.isVisible&& props.menuOpen?"block":"hidden"):(props.isVisible&& !props.menuOpen?"block":"hidden")} z-10 rounded-b-xl`;
  const logout=(e)=>{
    e.preventDefault();
    localStorage.removeItem('user');
    navigate("/")
    window.location.reload();
    
  }
  return (
    <div className={className}  >
      {props.isVisible ? (
        <ul class="py-2 text-base text-gray-700 dark:text-gray-200 w-56 " aria-labelledby="dropdownDefaultButton">
          <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Prateek kumar singh</li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer" onClick={logout}>Logout</a>
      </li>
    </ul>
      ) : null}
    </div>
  );
}

export default Dropdown;

