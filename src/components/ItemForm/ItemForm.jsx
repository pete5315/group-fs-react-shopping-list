import { useState } from "react"

function ItemForm(){

    const [item, setItem] = useState('')
    const [quantity, setQuantity] = useState('')
    const [unit, setUnit] = useState('')

    return (
        <>
        <h2> ADD AN ITEM</h2>
        <form>
        <label> Item:</label> <input />

        <label>Quantity:</label> <input /> 
        <label>Unit:</label> <input />
        <button>Save</button>
        </form>
    </>)
}

export default ItemForm