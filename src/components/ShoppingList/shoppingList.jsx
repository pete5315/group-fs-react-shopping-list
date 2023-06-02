import './ShoppingList.css';
import Item from '../Item/Item.jsx';

function ShoppingList({list,getList}) {




console.log(list)



    return (
        <>
        <h2>Shopping List</h2>
        <button>Reset</button>
        <button>Clear</button>
        {list.map(item => (
            <Item key={item.id} id={item.id} name={item.name} quantity={item.quantity} unit={item.unit} getList={getList}/>
        ))}
        </>
    )
    
}


export default ShoppingList;