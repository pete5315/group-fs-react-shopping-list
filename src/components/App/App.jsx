
    import React from 'react';
    import axios from 'axios';
    import Header from '../Header/Header.jsx'
    import './App.css';
    import Item from '../Item/Item.jsx';
    import ShoppingList from '../ShoppingList/shoppingList.jsx';
    import ItemForm from '../ItemForm/ItemForm.jsx';
    import {useState} from 'react';
    // import pool from '../../../server/modules/pool.js';

    function App() {


    let [list, setList] = useState([]);

  useEffect(() => {
    getList()
  }, [])


    const getList = () => {
        axios.get('/list')
        .then(response => {
            setList(response.data)
        })
        .catch(err => {
            alert('error getting list');
            console.log(err);
        })
    }

    const updateList = (id, data) => {
        axios.put('/list'+id, data)

        
        .then(response => {
            getList()
        })
        .catch(err => {
            alert('error getting list');
            console.log(err);
        })


    }







        return (
            <div className="App">
                <Header />

                <main>

                
                        <p>Under Construction...</p>

                    <ItemForm />
        
                    <ShoppingList getList={getList} />
                    
                    <Item/>
                

                
                </main>
            </div>
        );
    }

    export default App;
