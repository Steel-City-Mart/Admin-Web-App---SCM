import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigator = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">ProductsPage</NavLink>
       </div>
    );
}
 
export default Navigator;