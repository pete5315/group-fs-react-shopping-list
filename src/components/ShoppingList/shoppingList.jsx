import Item from '../Item/Item.jsx';



function ShoppingList({list}) {








    return (
        <>
        <h2>Shopping List</h2>
        <button>Reset</button>
        <button>Clear</button>
        {list.map(item => (
            <Item key={item.id} item={item}/>
        ))}
        </>
    )
    
}


export default ShoppingList;