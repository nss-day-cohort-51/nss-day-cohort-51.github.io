//Purpose: Creates and displays the Location component

import React from "react";

export const Location = () => {
  return (
    <>
      <div id="location" className="location-header">
        <div>
          <h4>WHERE IN THE WORLD ARE WE?</h4>

       </div>
       <div id="location" className="location">
        <ul>
          <li>Nashville, TN</li>
          <li>Franklin, TN</li>
          <li>Austin, TX</li>
          <li>Cleveland, OH</li>
          <li>Chattanooga, TN</li>
          <li>Huntsville, AL</li>
          <li>Old Hickory, TN</li>
          <li>Hendersonville, TN</li>
        </ul>
        <ul>
          <li>Antioch, TN</li>
          <li>Smyrna, TN</li>
          <li>Shelbyville, TN</li>
          <li>Spring Hill, TN</li>
          </ul>
      </div>
      </div>
    </>
  );
};
