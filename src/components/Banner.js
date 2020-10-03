import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./banner.css";
import SearchDate from "./SearchDate";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='banner'>
      <div className='banner__search'>
        <Button
          variant='outlined'
          className='banner__searchButton'
          onClick={() => setShowSearch(!showSearch)}>
          {!showSearch ? "Search Dates" : "Hide"}
        </Button>
        {showSearch && <SearchDate />}
      </div>
      <div className='banner__info'>
        <h1>Go Near </h1>
        <h5>
          Settle in somewhere new. Discover nearby stays to live, work, or just
          relax.
        </h5>
        <Button variant='contained' style={{ zIndex: 1 }}>
          Explore nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
