"use Client"

import React, { useContext } from 'react'
import Nav from './Nav'
import { MyContext } from '@/Helper/Context';

const Header = (props) => {
  const user = useContext(MyContext)

    console.log(props.num)
  return (
    <div className='bg-white text-black p-3'>
        {user}
    <Nav num={props.num}/>
    </div>
  );
};

export default Header