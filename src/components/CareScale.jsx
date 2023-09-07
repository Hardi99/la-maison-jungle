import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    
    const scaleType = careType === 'light' ? <img src={sun} alt="sun-icon" /> : <img src={water} alt="water-icon" />

    const careLevel = {
        1: 'peu',
        2: 'modérément',
        3: 'beaucoup'
    }
    
    function handleClick() {
        alert(`Cette plante requiert ${careLevel[scaleValue]} ${careType === 'light' ? 'de soleil' : 'd\'eau'}`)
    }

    return (
        <div className="careType" onClick={handleClick}>
            {/* On map chaque élément du tableau range si notre scaleValue est supérieur ou égal à un élément de range, on affiche une icône  */} 
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale