import React, { Component } from 'react'
import CartShoe from './CartShoe'
import data from './data.json'
import ListShop from './ListShop'
import Modal from './Modal'

export default class ShoeShop extends Component {
    state = {
        shoe: {
            id: 1,
            name: "Adidas Prophere",
            alias: "adidas-prophere",
            price: 350,
            description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 995,
            image: "http://svcy3.myclass.vn/images/adidas-prophere.png"
        },
        cart: []
    }
    checkSP = (value) => {
        this.setState({ shoe: value })
    }
    handleShoeDefault = (shoeDef) => {
        const value = { ...shoeDef, amount: 1 }
        const data = [...this.state.cart]
        const index = data.findIndex((shoe) => shoe.id === shoeDef.id)
        if (index !== -1) {
            data[index].amount += 1
        } else {
            data.push(value)
        }
        this.setState({
            cart: data,
        })
    }
    handleReCart = (id) => {
        const data = this.state.cart.filter((items) => items.id !== id)
        this.setState({
            cart: data,
        })
    }
    handleQuantity = (id, quantity) => {
        const data = [...this.state.cart]
        const index = data.findIndex((items) => items.id === id)
        if (data[index].amount > 1 || quantity > 0) {
            data[index].amount += quantity
        } else if (window.confirm('Are you sure you want to remove the product from the cart?')) {
            data.splice(index, 1)
        }
        this.setState({
            cart: data,
        })
    }
  render() {
    return (
      <div className='container'>
        <Modal content={this.state.shoe}/>
        <h1 className='text-center pb-3' style={{color:'yellow', fontSize:'50px'}}>Shoes Shop</h1>
        <CartShoe
             carts={this.state.cart}
             handleRemoveCart={this.handleReCart}
             handleQuantity={this.handleQuantity}
        />
        <div className='row'>
            {data.map((product)=>{
                return (
                    <div className='col-4 pt-4' key={product.id}>
                        <ListShop items={product} check={this.checkSP}
                        handleShoeDefault={this.handleShoeDefault}/> 
                    </div>
                )
            })}
        </div>
      </div>
    )
  }
}
