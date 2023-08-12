import React from "react";

const Filter = ({handleChange}) => {
    return (
      <input name="filter" onChange={handleChange} className="search" placeholder="Search"/>
    )
  }
  
  export default Filter