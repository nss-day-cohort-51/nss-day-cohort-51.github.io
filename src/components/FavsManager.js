// Purpose: Manage localStorage of favorite devs

let favsArray = [];

const initFavs = () => {
  const favsFromStorage = localStorage.getItem("NSSFavorites");
  if (favsFromStorage) {
    if (favsFromStorage !== "NSS Cohort 51 is Out of This World") {
      //great
      favsArray = JSON.parse(favsFromStorage);
    }
  } else {
    //setup the localStorage
    localStorage.setItem("NSSFavorites", [
      "NSS Cohort 51 is Out of This World",
    ]);
  }
};

export const getFavs = () => {
  return favsArray;
};

export const checkForFav = (devId) => {
  const found = favsArray.find((fav) => fav === devId);
  if (found) {
    return true;
  } else {
    return false;
  }
};

export const updateFavs = (favArray) => {
  //update storage
  localStorage.setItem("NSSFavorites", JSON.stringify(favArray));
  favsArray = JSON.parse(localStorage.getItem("NSSFavorites"));
};

//invoke this immediately upon load
initFavs();
