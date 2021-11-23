/*
functionality related to marking a developer as a favorite and storing the devID in an array in Local Storage.
Place this component in the DevCard and pass it the devId
*/

import react, { useEffect } from "react";
import { useState, setState } from "react";
import {checkForFav, getFavs, updateFavs} from './FavsManager';

export const Fav = ({devId}) => {
	const [isFavorite, setisFavorite] = useState(false)

	//update localStorage
	const handleFavChange = () => {
		const storageToChange = getFavs();
		const foundFavorite = storageToChange.findIndex(oneFav => oneFav === devId);

		if (foundFavorite !== -1){
			//remove it
			storageToChange.splice(foundFavorite,1);
			setisFavorite(false)	
		}else {
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
		<div style={{"background-color":"black"}}>
			<h2>Dev: {devId} Favorite:{checkForFav(devId)}</h2>
			<input type="checkbox" id="favorite" checked={isFavorite ? true : false} onChange={handleFavChange}/>
		</div>
		</>
	)
}