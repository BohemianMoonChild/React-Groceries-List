// import logo from './logo.svg';
import './App.css';
import groceriesData from './Data/groceries';
import { Component } from 'react';
import Navbar from './Components/navbar';
import ProductList from './Components/productList'


class App extends Component {
  state = {
    groceriesData: groceriesData,
    item: '',
    brand: '',
    units: '',
    quantity: 0,
    isPurchased: false

  }

  handleChange = (event) => {
    this.setState({ [event.target.id] : event.target.value })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()

// ===CREATE NEW PRODUCT=== 
    const newProduct = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity,
      isPurchased: this.state.isPurchased,
    }

// ===NEW VALUES SET TO 'STATE'===
this.setState({
  groceriesData: [newProduct, ...this.state.groceriesData],
  item: '',
  brand: '',
  units: '',
  quantity: 0,
  isPurchased: false
 })
}

handleRemove = (item, idx) => {  
  console.log(item, idx)

   const newArray = this.state.groceriesData.filter(
    (i, index)  => index ===idx)

   const filterArray = this.state.groceriesData.filter(
    (i, index) => index!==idx)
  
   newArray[0].isPurchased = true
   console.log(this.state.groceriesData);
   this.setState({
    groceriesData:[...newArray, ...filterArray]
   }) 
}

//===RENDER DATA===
render () {
    return (
    <div className="App">
      <Navbar text= 'Groceries List React App' />
      
      <form onSubmit= {this.handleSubmit}>
        <label htmlFor='item'>Item Name</label>
        <input
          type='text'
          value= {this.state.item}
          onChange= {this.handleChange}
          id='item'
        />

        <label htmlFor='brand'>Brand Name</label>
        <input
          type='text'
          value= {this.state.brand}
          onChange= {this.handleChange}
          id='brand'
        />

        <label htmlFor='units'>Units</label>
        <input 
          type='text'
          value= {this.state.units}
          onChange= {this.handleChange}
          id='units'
        />  

        <label htmlFor='quantity'>Quantity</label>
        <input 
          type='number'
          value= {this.state.quantity}
          onChange= {this.handleChange}
          id='quantity'
        />

        <input type="submit" />
      </form>

      <ProductList groceriesData= {this.state.groceriesData} 
        handleRemove= {this.handleRemove} />
    </div>
  )
  }
}

export default App;
