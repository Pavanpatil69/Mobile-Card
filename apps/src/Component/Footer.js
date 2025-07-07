import React from 'react'

export default function Footer(props) {
  return (
    <div className='row fixed-bottom'>
      <button className='btn btn-danger col-2' onClick={() => {
        props.resetquantity()
      }}>Reset</button>
      <div className='col-8 bg-black text-white text-center'>
        {props.totalamout}
      </div>
      <button className='btn btn-primary col-2'>Pay Now</button>
    </div>
  )
}
