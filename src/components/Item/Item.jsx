    function Item({id,name,quantity}) {

        handleDelete = (id) => {

            console.log('Deleted')
        }

        return (
            <>

            <div>
                <h4>Apples </h4>
                <p>5 lbs</p>
                <button>Buy</button>
                <button onClick={ () => {handleDelete(id)}} >Remove</button>
            
          
           
            
          
        </div>
        </>
        )
        
    }

    export default Item;