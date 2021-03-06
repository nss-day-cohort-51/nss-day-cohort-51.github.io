/* Purpose: 
Creates functionality related to marking a developer as a favorite and storing the devID in an array in Local Storage.
Place this component in the DevCard and pass it the devId
*/
import React, { useEffect } from "react";
import { useState } from "react";
import { checkForFav, getFavs, updateFavs } from "./FavsManager";

export const Fav = ({ devId }) => {
  const [isFavorite, setisFavorite] = useState(false);

  //update localStorage
  const handleFavChange = () => {
    const storageToChange = getFavs();
    const foundFavorite = storageToChange.findIndex(
      (oneFav) => oneFav === devId
    );

    if (foundFavorite !== -1) {
      //remove it
      storageToChange.splice(foundFavorite, 1);
      setisFavorite(false);
    } else {
      //add it
      storageToChange.push(devId);
      setisFavorite(true);
    }
    updateFavs(storageToChange);
  };

  useEffect(() => {
    setisFavorite(checkForFav(devId));
  }, [devId]);

  return (
    <>
      <span onClick={handleFavChange}>
        <input
          type="checkbox"
          checked={isFavorite ? true : false}
          readOnly
        />
        <span></span>
      </span>
    </>
  );
};
