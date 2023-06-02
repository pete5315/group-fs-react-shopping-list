import {useState} from "react"

function Item() {

const [selected, setSelected] = useState(false)

const handlePurchased = () => {
    console.log('You want to purchase this item');
}






        return (
            <>
            <div>
                <h4>Apples</h4>
                <p>5 lbs</p>
                <button>Buy</button>
                <button>Remove</button>
            
          
            <h4>Bread</h4>
            <p>5 loof</p>
            <button>Buy</button>
            <button>Remove</button>
       
            <h4>Milk</h4>
            <p> 1 galloon</p>
            <button>Buy</button>
            <button>Remove</button>
        
            <h4>Sliced Almonds</h4>
            <p>2 cups</p>
            <button>Buy</button>
            <button>Remove</button>
       
            <h4>Bananas</h4>
            <p> 1 bunch</p>
            <button>Buy</button>
            <button>Remove</button>
        </div>
        </>
        )
        
    }

    export default Item;