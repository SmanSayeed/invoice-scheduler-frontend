// src/components/DateRangePicker.js
import React from 'react';

const DateRangePicker = ({ startDate, endDate, setStartDate, setEndDate }) => {
  return (
    <div className="form-group">
      <label htmlFor="startDate">Start Date</label>
      <input
        type="date"
        id="startDate"
        className="form-control"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <label htmlFor="endDate">End Date</label>
      <input
        type="date"
        id="endDate"
        className="form-control"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
    </div>
  );
};

export default DateRangePicker;
