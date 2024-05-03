const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			peoples: [],
			planets: [],
			vehicles: [],
			info: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			login: async (email, password, name) => {
				try{
				let response = await fetch("https://ominous-succotash-4j7wgw444x6gc7464-3000.app.github.dev/login", {
					method: 'POST',
					headers:{
						'Content-Type':'application/json'
					},
					body: JSON.stringify({
						email:email,
						password:password,
						name:name
					})
				})

				let data = await response.json()
				if (response.status === 200) {
					localStorage.setItem("token", data.access_token);
					console.log(data);
					return true;
				}else{
					console.log(data);
					return false
				}
				} catch (error) {
					return false;
				}

			},
			logout: () => {
				localStorage.removeItem("token")
		 	},
			getFavorites: async () => {
				let token = localStorage.getItem("token")
				try{
					let response = await fetch("https://ominous-succotash-4j7wgw444x6gc7464-3000.app.github.dev/users/favorites", {
						method: 'GET',
						headers:{
							'Content-Type':'application/json',
							"Authorization": "Bearer "+token
						},
						
					})

					let data = await response.json()
					if (response.status === 200) {
						console.log(data);
						setStore({favorites:data.result})
					}else{
						console.log(data);
						return [];
					}
				} catch (error) {
					return [];
				}

			},
			addFavoritesCharacters: async (name, uid) => {
				let token = localStorage.getItem("token")
				try{
				let response = await fetch(`https://ominous-succotash-4j7wgw444x6gc7464-3000.app.github.dev/favorite/people/${uid}`, {
					method: 'POST',
					headers:{
						'Content-Type':'application/json',
						'Authorization': "Bearer "+token
					},
					body: JSON.stringify({
						name:name,
						uid:uid
					})
				})

				let data = await response.json()
				if (response.status === 200) {
					console.log(data);
					// const newArray= getActions().favorites.concat(name)
					// setStore({ favorites: newArray })
					getActions().getFavorites()
				}else{
					console.log(data);
					return false
				}
				} catch (error) {
					return false;
				}

			},
			deleteFavoritesCharacters: async (uid) => {
				let token = localStorage.getItem("token")
				try{
				let response = await fetch(`https://ominous-succotash-4j7wgw444x6gc7464-3000.app.github.dev/favorite/people/${uid}`, {
					method: 'DELETE',
					headers:{
						'Content-Type':'application/json',
						'Authorization': "Bearer "+token
					},
				})

				let data = await response.json()
				if (response.status === 200) {
					console.log(data);
					let listFav = getStore().favorites[0]
					const newListFav = listFav.filter((character) => character.uid !== uid)
					setStore({
						favorites: [
							newListFav
						]
					})
				}else{
					console.log(data);
					return false
				}
				} catch (error) {
					return false;
				}

			},
			getPeople: () => {
				fetch("https://www.swapi.tech/api/people/", {
					method: 'GET'
				})
					.then(res => res.json())
					.then(data => setStore({ peoples: data.results }))
					.catch(err => console.error(err))

			},
			addFavoritesPlanets: async (name, uid) => {
				let token = localStorage.getItem("token")
				try{
				let response = await fetch(`https://ominous-succotash-4j7wgw444x6gc7464-3000.app.github.dev/favorite/planet/${uid}`, {
					method: 'POST',
					headers:{
						'Content-Type':'application/json',
						'Authorization': "Bearer "+token
					},
					body: JSON.stringify({
						name:name,
						uid:uid
					})
				})

				let data = await response.json()
				if (response.status === 200) {
					console.log(data);
					getActions().getFavorites()
				}else{
					console.log(data);
					return false
				}
				} catch (error) {
					return false;
				}

			},
			deleteFavoritesPlanets: async (uid) => {
				let token = localStorage.getItem("token")
				try{
				let response = await fetch(`https://ominous-succotash-4j7wgw444x6gc7464-3000.app.github.dev/favorite/planet/${uid}`, {
					method: 'DELETE',
					headers:{
						'Content-Type':'application/json',
						'Authorization': "Bearer "+token
					},
				})

				let data = await response.json()
				if (response.status === 200) {
					console.log(data);
					let listFav = getStore().favorites[0]
					const newListFav = listFav.filter((planet) => planet.uid !== uid)
					setStore({
						favorites: [
							newListFav
						]
					})
				}else{
					console.log(data);
					return false
				}
				} catch (error) {
					return false;
				}

			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/", {
					method: 'GET'
				})
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err))

			},
		// 	addFavorites: async (type, uid) => {
		// 		let token = localStorage.getItem("token")
		// 		try{
		// 		let response = await fetch(`https://ominous-succotash-4j7wgw444x6gc7464-3000.app.github.dev/favorite/${type}/${uid}`, {
		// 			method: 'POST',
		// 			headers:{
		// 				'Content-Type':'application/json',
		// 				'Authorization': "Bearer "+token
		// 			},
		// 		})

		// 		if (response.status === 201) {
		// 			if (type === "people") {
		// 				let listFav = getStore().favorites[0];
		// 				const allCharacters = getStore().peoples;
		// 				const newFav = allCharacters.filter((character) => character.uid === uid);
		// 				const newListFav = listFav.concat(newFav) ;
		// 				setStore({
		// 					favorites: [
		// 						newListFav,
		// 						getStore().favorites[1],
		// 						getStore().favorites[2]
		// 					]
		// 				})
		// 			} else if (category === "planets") {
		// 				let listFav = getStore().favorites[1];
		// 				const allPlanets = getStore().planets;
		// 				const newFav = allPlanets.filter((planet) => planet.uid === uid);
		// 				const newListFav = listFav.concat(newFav) ;
		// 				setStore({
		// 					favorites: [
		// 						getStore().favorites[0],
		// 						newListFav,
		// 						getStore().favorites[2]
		// 					]
		// 				})
		// 			} else {
		// 				let listFav = getStore().favorites[2];
		// 				const allVehicles = getStore().vehicles;
		// 				const newFav = allVehicles.filter((vehicle) => vehicle.uid === uid);
		// 				const newListFav = listFav.concat(newFav) ;
		// 				setStore({
		// 					favorites: [
		// 						getStore().favorites[0],
		// 						getStore().favorites[1],
		// 						newListFav
		// 					]
		// 				})
		// 			}
		// 		} else {
		// 			return [];
		// 		}
		// 	} catch (error) {
		// 		return []; 
		// 	} 
		// },
			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/", {
					method: 'GET'
				})
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }))
					.catch(err => console.error(err))

			},
			getInfo: (type, id) => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch(`https://www.swapi.tech/api/${type}/` + id, requestOptions)
					.then((response) => response.json())
					.then((result) => setStore({ info: result.result }))
					.catch((error) => console.error(error));
			},
			addFavorite: (favorite) => {
					const store = getStore();
					const newArray= store.favorites.concat(favorite)
					setStore({ favorites: newArray })
		 	},
			deleteFavorite: (name) => {
				const arrayfiltered = getStore().favorites.filter((item, index) => item !== name)
				// console.log(arrayfiltered);
				setStore({ favorites: arrayfiltered })
		 	},
			favoriteList: (name) => {
				const listNames = getStore().favorites
				if (listNames.length == 0) {
					getActions().addFavorite(name)
				} else {
					if (listNames.includes(name)) {
						getActions().deleteFavorite(name)
					} else {
						getActions().addFavorite(name)
					}
				}
		 	}
		}
		// removeFav: async (type, uid) => {
		// 	const token = localStorage.getItem("token")
		// 	try {
		// 		const response = await fetch(`https://ominous-succotash-4j7wgw444x6gc7464-3000.app.github.dev/favorite/${type}/${uid}`, {
		// 			method: 'DELETE',
		// 			headers:{
		// 				'Content-Type':'application/json',
		// 				'Authorization': "Bearer " + token
		// 			},
		// 		});
		// 		if (response.status === 200) {
		// 			if (type === "people") {
		// 				let listFav = getStore().favorites[0];
		// 				const newListFav = listFav.filter((character) => character.uid !== uid);
		// 				setStore({
		// 					favorites: [
		// 						newListFav,
		// 						getStore().favorites[1],
		// 						getStore().favorites[2]
		// 					]
		// 				})
		// 			} else if (type === "planets") {
		// 				let listFav = getStore().favorites[1];
		// 				const newListFav = listFav.filter((planet) => planet.uid !== uid);
		// 				setStore({
		// 					favorites: [
		// 						getStore().favorites[0],
		// 						newListFav,
		// 						getStore().favorites[2]
		// 					]
		// 				})
		// 			} else {
		// 				let listFav = getStore().favorites[2];
		// 				const newListFav = listFav.filter((vehicle) => vehicle.uid !== uid);
		// 				setStore({
		// 					favorites: [
		// 						getStore().favorites[0],
		// 						getStore().favorites[1],
		// 						newListFav
		// 					]
		// 				})
		// 			}
		// 		}
		// 	} catch (error) {
		// 		return []; 
		// 	} 
		// }
	};
};

export default getState;
