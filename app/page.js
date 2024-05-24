
// ******************************Two Way Binding Code**********************
"use client"

// import React, { useState } from 'react'

// const page = () => {
//   const [username, setusername] = useState("")
//   return (
//     <>
//       <h1 className='mb-5 text-2xl'>Enter Your Name:</h1>

//       <form>
//         <input
//           type='text'
//           className='text-black border-2 border-zinc-950 px-4 py2 text-xl'
//           value={username}
//           onChange={(e)=>{
//             setusername(e.target.value)
//             console.log(username)
//           }}
//         />
//       </form>
//     </>
//   )
// }
// ************close Two way Binding*************

// ************App Routing**************
// import React from 'react'

// export const page = () => {
//   return (
//    <>
//    <h1 className='text-2xl font-bold text-blue-600'> This Is Home page</h1>
//    <a href='/Contact'>Contact</a>
//    </>
//   )
// }

// ************App Routing(API CONNFIG)**************
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Link from 'next/link'

// export const page = () => {
//   const [users, setusers] = useState([])

//   const getusers = async () => {

//     const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
//     setusers(data)
//   }

//   // *****AUTOMATIC FUNCTION CALLING getusers()*****
//   useEffect(() => {
//     getusers()
//   }, [])

//   return (
//     <>
//       <button onClick={getusers} className='bg-blue-500 mt-4 ml-8 text-white px-4 py-3 
//     rounded font-bold'>Get Data</button>
//       <div className='p-8 bg-slate-100 mt-5'>
//         <ul>
//           {users.map((e) => {
//             return <li className='text-zinc-950'>
//               {e.username}  --- <a 
//               href={`/${e.id}`}>Explore</a></li>
//           })}
//         </ul>


//       </div>

//     </>
//   )
// }

// ************CONTEXT API**************

// import React, { useContext, useEffect, useState } from 'react'
// import axios from 'axios'
// import Header from './Components/Header'
// import { MyContext } from '@/Helper/Context'

 
//  const page = () => {
//   const user = useContext(MyContext)
//   console.log(user)
//    return (
//      <div>{user}
//      <Header />
//      </div>
//    )
//  }
 
 

// ************CONTEXT API**************


//********* REACT TOASTIFY***************

import React from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const notify = () => {
    console.log("hello")
    toast.success('🦄 Login Successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  }
  return (

    <div><button onClick={notify}>
      LOGIN
      </button>
      <ToastContainer />
      </div>
  )
}

export default page