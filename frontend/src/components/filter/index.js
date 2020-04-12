import React, { useState } from 'react';

import "./styles.css";


export default function Filter() {
  const [filters, setFilters] = useState([]);

  function newFilter() {
    
    setFilters({filters: ""})
  }

  return (

    <div className="main-container">
      <form action="">
        {filters.map(filter => (
            <input type="text"/>
          ))
        }
        
        <button 
          onClick={newFilter}
          className="button"
        >+</button>
      </form>
    </div>
  )
}