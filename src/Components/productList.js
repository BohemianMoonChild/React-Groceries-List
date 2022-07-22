// import ProductItem from '../Components/productItem';

// const ProductList = (props) => {
// return (
//     <div>
//         <h2>Groceries</h2>

//         {
//           props.product.map(

//             (item, idx) => !item.isPurchased ? 
//             (<ProductItem groceriesData={item} key={idx} 
//                 handleRemove ={props.handleRemove} />) : 
//                 ( <h3 key={idx}> {item.item} Purchased</h3> )
//         )}

//     </div>
//   )

// }

// export default ProductList;


import ProductItem from '../Components/productItem'

const ProductList = (props) => {
  return (
    <div>
      {props.groceriesData.map(
        (item, idx) => !groceriesData.isPurchased && (<ProductItem groceriesData={item} key={idx} />
        )
      )}

    </div>
  );
};



export default ProductList;