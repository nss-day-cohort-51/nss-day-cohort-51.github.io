/*
functionality related to favoriting a student and then to display as collection (and print)
*/

import react, { useEffect } from "react";
import { useState, setState } from "react";

export const Favs = ({devId}) => {
	const [favorite, setFavorite] = useState(false)
	// const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("favorite_devs") !== null)
	const [NSSFavorites, setNSSFavorites] = useState([]);

	//update localStorage
	const handleFavChange = evt => {

		// const storageToChange = { ...animal };
		// stateToChange[evt.target.id] = evt.target.value;
		// setAnimal(stateToChange);
	  };

	//get items from localStorage
	useEffect(() => {
		//get items from localStorage
		const favsFromStorage = JSON.parse(sessionStorage.getItem("NSSFavorites"));
		if (favsFromStorage){
			//great
		}else {
			sessionStorage.setItem("NSSFavorites", []);
		}

		//if items exists, great. If not exists, go ahead and set an empty array in localStorage


		// const favoriteArray = JSON.parse(sessionStorage.getItem("favorite_devs")).split(",") || null;
		// const favoriteArray = JSON.parse(sessionStorage.getItem("favorite_devs")) || null;
		// console.log("favarray", favoriteArray)
		// if (favoriteArray => setFavorite(true));
	}, [favorite])

	return (
		<p>Dev: {devId} Favorite:{favorite.toString()}</p>
	)
}