import React from 'react'
import Header from './Header'

const Nav = (props) => {
    console.log(props.num)
  return (
    <div className='bg-red-200'>{props.num}</div>
  )
}

export default Nav