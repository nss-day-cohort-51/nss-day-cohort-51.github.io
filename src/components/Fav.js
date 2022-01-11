/*
functionality related to marking a developer as a favorite and storing the devID in an array in Local Storage.
Place this component in the DevCard and pass it the devId
*/

import react, { useEffect } from "react";
import { useState, setState } from "react";
import { checkForFav, getFavs, updateFavs } from './FavsManager';
// import { FaRegHeart } from 'react-icons';

export const Fav = ({ devId }) => {
	const [isFavorite, setisFavorite] = useState(false)

	//update localStorage
	const handleFavChange = () => {
		const storageToChange = getFavs();
		const foundFavorite = storageToChange.findIndex(oneFav => oneFav === devId);

		if (foundFavorite !== -1) {
			//remove it
			storageToChange.splice(foundFavorite, 1);
			setisFavorite(false)
		} else {
			//add it
			storageToChange.push(devId)
			setisFavorite(true)
		}
		updateFavs(storageToChange);
	};

	useEffect(() => {
		setisFavorite(checkForFav(devId));
	}, [isFavorite])


	return (
		<>
		
		{checkForFav(devId)}
		<span onClick={handleFavChange}>
			<input type="checkbox" checked={isFavorite ? true : false} />
			<span></span>
		</span>
			
		</>
	)
}

