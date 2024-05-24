"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const page = ({ params }) => {

    const { id } = params;
    const [users, setusers] = useState([])

    const getusers = async () => {

        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
        setusers(data)
    }

    // *****AUTOMATIC FUNCTION CALLING getusers()*****
    useEffect(() => {
        getusers()
    }, [])


    return (
        <>
        {JSON.stringify(users)}
        </>
    )
}

export default page