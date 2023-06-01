import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';


function App() {
    return (
        <div className="App">
            <Header />

            <main>
                <ShoppingList/>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
