// Je récupère les props et je les passent en arguments à la fonction PlantItem
function Categories({ plantList }) {

    // Je crée un array catArray qui va recevoir les catégories
    let catArray = []

    // Je map sur plantList et je cible la clé category de chacun de ses éléments (les éléments sont des objets),
    plantList.map((plant) => {
        // Si une category présente dans plantList ne l'est pas dans catArray je l'ajoute dans ce dernier, la catégorie sera unique
        if (catArray.indexOf(plant.category) === -1) {
            catArray.push(plant.category)
        }
    })

    return (
        <select>
            <option value="">---</option>
            {catArray.map((category, index) => (
                <option key={index} value={category}>{category}</option>
            ))}
        </select>
    )
}

export default Categories