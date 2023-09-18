import { useState } from "react";
import Link from "./Link/Link";
import {AiOutlineMenuUnfold,AiFillCloseCircle } from 'react-icons/ai'


const Nav = () => {
  const[open,setOpen]=useState(false);
  const routes = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Services', path: '/services' },
    { id: 4, name: 'Contact', path: '/contact' },
    { id: 5, name: 'NotFound', path: '*' },
  ];
  
    return (
<nav>
<div  className="md:hidden" onClick={()=>setOpen(!open)}>
  {
    open===true? <AiFillCloseCircle className="text-2xl "></AiFillCloseCircle>:
    <AiOutlineMenuUnfold className="text-2xl "></AiOutlineMenuUnfold>
 
  }
   {/* <AiOutlineMenuUnfold className="text-2xl "></AiOutlineMenuUnfold> */}
  </div>
 <ul className={`md:flex duration-1000 absolute  md:static
 ${open? 'top-16':'-top-60'}
 
bg-sky-300 px-6`}>
 {
    routes.map(route=> <Link key={routes.id} route={route} ></Link>)
  }
 </ul>
</nav>

    );
};

export default Nav;