import React, { useEffect, useState } from 'react'
import Card from "./components/Card"
import api from './services/api'

const Home = () => {
  const [beers, setBeers] = useState([])

  // const getBeers = async()=>{
  //   const res = await fetch("https://api.punkapi.com/v2/beers")
  //   const data = await res.json()
  //   setBeers(data)
  // }

  async function getAllBeers() {
    const res = await api.get("/beers");
    setBeers(res.data);
  }

  useEffect(()=>{
    getAllBeers()
  }, [])

  return (
    <div className='grid'>
        {beers.length 
           ? beers.map(beer => (<Card data={beer} />))
           : null
        }
    </div>
  )
}

export default Home