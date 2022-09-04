import React, { Component } from 'react'

export default class ListShop extends Component {
  render() {
    const { items, check,handleShoeDefault } = this.props;
    return (
    <div className='card'>
        <img src={items.image} alt="..."/>
        <div className='card-body'>
            <h5>{items.name}</h5>
            <p>{items.price} $</p>
        </div>
        <div className='w-100 d-flex align-items-center mb-3' style={{ justifyContent: 'space-evenly'}}>
            <button className='btn btn-success'style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}
                onClick={()=>handleShoeDefault(items)}>
                <span>Add to Cart</span>
                <i className="fa-solid fa-cart-arrow-down ml-2" aria-hidden="true"></i>
            </button>
            <button className='btn btn-info' data-toggle="modal" data-target="#exampleModal" onClick={
                () => {check(items)}}>Xem chi tiết <i className="fa-solid fa-magnifying-glass ml-2"></i>
            </button>
        </div>
    </div>
    )
  }
}
