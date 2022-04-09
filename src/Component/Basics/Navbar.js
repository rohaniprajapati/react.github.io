import React from 'react';


const Navbar = ({filterItem}) => {
  return(
  	<>
      <nav className="navbar">
        <div className="btn-group">
           <button
            className="btn-group__item"
            onClick={() => filterItem("Breakfast")}>
            Breakfast
           </button>    
           
           <button
            className="btn-group__item"
            onClick={() => filterItem("lunch")}>
            lunch
           </button>
           <button
            className="btn-group__item"
            onClick={() => filterItem("evening")}>
            evening
           </button>
           <button
            className="btn-group__item"
            onClick={() => filterItem("dinner")}>
            dinner
           </button>




        </div>

      </nav>
        
    </>

  	);
    
};


export default Navbar;