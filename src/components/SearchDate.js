import React, { useState } from "react";
import "./searchDate.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { PeopleAltTwoTone } from "@material-ui/icons";
import { Button } from "@material-ui/core";

function SearchDate() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }
  return (
    <div className='searchDate'>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h4>
        Number of Guests <PeopleAltTwoTone />{" "}
      </h4>
      <input type='number' defaultValue={2} min={0} max={12} />
      <Button>Search Airbnb</Button>
    </div>
  );
}

export default SearchDate;
