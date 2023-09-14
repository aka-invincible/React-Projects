import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // const [data, setData] = useState();
    // useEffect( () => {
    //     fetch("https://api.github.com/users/aka-invincible").
    //     then((response) => response.json()).
    //     then((data) => setData(data))
    // } , [])// this

    const data = useLoaderData(); // or this
  return (
    <div className='bg-gray-600 text-center text-white text-3xl p-4'>
      Github Followers: {data?.followers}
      <img className='mx-auto my-4 rounded-full' src={data?.avatar_url} alt="Git picture" width="300px"/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => { // or this
    const response = await fetch("https://api.github.com/users/aka-invincible");
    return response.json();
}
