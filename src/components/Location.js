// Purpose: Creates and displays the Location component
import React from "react";

export const Location = () => {
  return (
    <>
      <div id="location" className="location">
        <h4>WHERE IN THE WORLD ARE WE?</h4>
      </div>

      <div className="location-wrapper">
        <div className="location-list1">
          <ul>
            <li>Nashville, TN</li>
            <li>Franklin, TN</li>
            <li>Austin, TX</li>
            <li>Cincinnati, OH</li>
            <li>Chattanooga, TN</li>
            <li>Huntsville, AL</li>
            <li>Dickson, TN</li>
            <li>Clarkesville, TN</li>
            <li>Thompsons Station, TN</li>
          </ul>
        </div>
        <div className="location-list2">
          <ul>
            <li>Old Hickory, TN</li>
            <li>Bowling Green, KY</li>
            <li>Antioch, TN</li>
            <li>Smyrna, TN</li>
            <li>Shelbyville, TN</li>
            <li>Spring Hill, TN</li>
            <li>Ashland City, TN</li>
            <li>Portland, TN</li>
            <li>Madison, TN</li>
          </ul>
        </div>
      </div>
    </>
  );
};
