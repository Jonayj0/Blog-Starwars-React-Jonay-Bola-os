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
			signup: async (email, password, name) => {
				try {
					let response = await fetch("https://ominous-succotash-4j7wgw444x6gc7464-3000.app.github.dev/signup", {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							email: email,
							password: password,
							name: name
						})
					})
					if (!response.ok) {
						const errorData = await response.json()
						console.log(errorData);
						throw new Error(errorData.msg)
					}
					let data = await response.json()
					if (data) {
						console.log(data);
						navigate("/login")
						return data.msg;
					} else {
						console.log(data);
						return false
					}
				} catch (error) {
					console.log(error.message);
					return error.message;
				}

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
					getActions().getFavorites()
				}else{
					console.log(data);
					return false
				}
				} catch (error) {
					return false;
				}

			},
			deleteFavoritesCharacters: async (id) => {
				let token = localStorage.getItem("token")
				try{
				let response = await fetch(`https://ominous-succotash-4j7wgw444x6gc7464-3000.app.github.dev/favorite/people/${id}`, {
					method: 'DELETE',
					headers:{
						'Content-Type':'application/json',
						'Authorization': "Bearer "+token
					},
				})

				let data = await response.json()
				if (response.status === 200) {
					console.log(data);
					await getActions().getFavorites()
					// let listFav = getStore().favorites[0]
					// const newListFav = listFav.filter((character) => character.id !== id)
					// setStore({
					// 	favorites: [
					// 		newListFav
					// 	]
					// })
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
					await getActions().getFavorites()
				}else{
					console.log(data);
					return false
				}
				} catch (error) {
					return false;
				}

			},
			deleteFavoritesPlanets: async (id) => {
				let token = localStorage.getItem("token")
				try{
				let response = await fetch(`https://ominous-succotash-4j7wgw444x6gc7464-3000.app.github.dev/favorite/planet/${id}`, {
					method: 'DELETE',
					headers:{
						'Content-Type':'application/json',
						'Authorization': "Bearer "+token
					},
				})

				let data = await response.json()
				if (response.status === 200) {
					console.log(data);
					await getActions().getFavorites()
					// let listFav = getStore().favorites[0]
					// const newListFav = listFav.filter((planet) => planet.uid !== uid)
					// setStore({
					// 	favorites: [
					// 		newListFav
					// 	]
					// })
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
		 	},
			removeFav: async (type, id) => {
				const token = localStorage.getItem("token")
				try {
					const response = await fetch(`https://ominous-succotash-4j7wgw444x6gc7464-3000.app.github.dev/favorite/${type}/${id}`, {
						method: 'DELETE',
						headers:{
							'Content-Type':'application/json',
							'Authorization': "Bearer " + token
						},
					});
					if (response.status === 200) {
						if (type === "people") {
							let listFav = getStore().favorites[0];
							const newListFav = listFav.filter((people) => people.uid !== id);
							setStore({
								favorites: [
									newListFav,
									getStore().favorites[1],
									getStore().favorites[2]
								]
							})
						} else if (type === "planets") {
							let listFav = getStore().favorites[1];
							const newListFav = listFav.filter((planets) => planets.uid !== id);
							setStore({
								favorites: [
									getStore().favorites[0],
									newListFav,
									getStore().favorites[2]
								]
							})
						} else {
							let listFav = getStore().favorites[2];
							const newListFav = listFav.filter((vehicles) => vehicles.uid !== id);
							setStore({
								favorites: [
									getStore().favorites[0],
									getStore().favorites[1],
									newListFav
								]
							})
						}
					}
				} catch (error) {
					return []; 
				} 
			}
			// addOrRemovePeople: (name, uid) => {
			// 	// console.log(people.uid);
			// 	const peopleFavorite = getStore().favorites[0]
			// 	const isFavorite = peopleFavorite.includes(name)
			// 	if (isFavorite) {
			// 	  	getActions().deleteFavoritesCharacters(name)
			// 	}else {
			// 		getActions().addFavoritesCharacters(name, uid)
			// 	}
			//   }
		},
	};
};

export default getState;
