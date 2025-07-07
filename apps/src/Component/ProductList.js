import React from 'react'
import Product from './Product'

export default function ProductList(props) {
  return (
    props.productlist.length > 0 ?
    props.productlist.map((product,i)=>{
        return <Product product={product} key={i} incrementquantity={props.incrementquantity} decrementquantity={props.decrementquantity} index={i} removeitems={props.removeitems}/>
    })
    : <h1>No Products are exists in this card</h1>
  )
}
