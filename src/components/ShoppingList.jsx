import Categories from "./Categories"
import PlantItem from "./PlantItem"
import plantList from "../datas/ShoppingList"

function ShoppingList({ cart, updateCart }) {

    return (
        <div className="lmj-shopping-list">
            <Categories plantList={plantList} />
            
            <ul className="lmj-plant-list">
                {/* Je map sur plantList pour cibler plusieurs clés des éléments. Je déclare des props dans PlantItem qui recueillent les valeurs des clés */}
                {plantList.map((plant) => (
                    <div key={plant.id}>
                        <PlantItem cover={plant.cover} name={plant.name} price={plant.price} water={plant.water} light={plant.light} cart={cart} updateCart={updateCart} />
                    </div>
                    ))}
            </ul>
        </div>
    )
}

export default ShoppingList