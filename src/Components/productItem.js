const ProductItem = (props) => {
    // const { item,brand, units, quantity, isPurchased } = props.groceriesData 
    return(
        <div> 
            <h2> Item: {props.groceriesData.item}</h2>
            <h2> Brand: {props.groceriesData.brand}</h2>
            <h2> Quantity: {props.groceriesData.quantity}</h2> 
            <h2> Units: {props.groceriesData.units}</h2>
            <h2> {props.groceriesData.isPurchased}</h2>
        
            <button onClick={ () => props.handleRemove
                (props.product, props.idx) }>Remove</button>
        </div>
    )
} 

export default ProductItem