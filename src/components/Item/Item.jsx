    import axios from 'axios'
    
    function Item({id,name,quantity,getList}) {

       const handleDelete = (id) => {
            console.log('Deleted')
            console.log(id)
            
            axios.delete(`/list/${id}`)
            .then(response => {
                getList()
                
            }).catch(err => {
                console.log('Error with delete on Item', err)
            })
        }

        return (
            <>

            <div>
                <h4>{name}</h4>
                <p>{quantity}</p>
                <button>Buy</button>
                <button onClick={() => {handleDelete(id)}} >Remove</button>
            
          
           
            
          
        </div>
        </>
        )
        
    }

    export default Item;