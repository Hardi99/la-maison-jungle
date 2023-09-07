import CareScale from "./CareScale"

// Je récupère les props et je les passent en arguments à la fonction PlantItem
function PlantItem({ cover, name, price, water, light, cart, updateCart }) {

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

    return (
        <li className="lmj-plant-item" /* onClick={handleClick} */>
            <img src={cover} alt="" className="lmj-plant-item-cover" />
            {name} 
            <CareScale careType='water' scaleValue={water} />
            <CareScale careType='light' scaleValue={light} />
            <button onClick={() => addToCart(name, price)}>Ajouter</button>
        </li>
    )
}

export default PlantItem