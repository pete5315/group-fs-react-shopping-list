import React from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import ShoppingList from '../ShoppingList/shoppingList.jsx';
import ItemForm from '../ItemForm/ItemForm.jsx';

function App() {
    return (
        <div className="App">
            <Header />

            <main>
                <ShoppingList/>
                <p>Under Construction...</p>
                <ItemForm />
            </main>
        </div>
    );
}

export default App;
