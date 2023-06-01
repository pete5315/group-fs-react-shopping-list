import React from 'react';
import axios from axios;
import Header from '../Header/Header.jsx'
import './App.css';
import Item from '../Item/Item.jsx';
import ShoppingList from '../ShoppingList/shoppingList.jsx';
import ItemForm from '../ItemForm/ItemForm.jsx';

function App() {


  let [list, setList] = useState([]);



  const getList = () => {
    axios.get('/list')
      .then(response => {
        setList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }




    return (
        <div className="App">
            <Header />

            <main>

            
                <Item/>
      
                <ShoppingList getList={getList} />

                <p>Under Construction...</p>

                <ItemForm />
            </main>
        </div>
    );
}

export default App;
