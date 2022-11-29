import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from "./services/api"
//Esta página irá renderizar cada bebida individualmente

const Beer = () => {
    const [beer, setBeer] = useState([])

    const { idBeer } = useParams()

    const navigate = useNavigate()

    const handleVoltar = () => {
        navigate("/")
    }

    useEffect(() => {
        getBeerDetails();
    }, [])
    
    async function getBeerDetails(){
        const res = await api.get(`beers/${idBeer}`)

        console.log(res.data)

        setBeer(res.data);
    }
  
  return (
    <div>
        <h2>{`Cerveja número: ${params.id}`}</h2>
        <div className='card'>
            <img src={beer.image_url} alt="beer-detail" />
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <p>{beer.brewers_tips} </p>
        </div>
        <button onClick={handleVoltar}>Voltar</button>
    </div>

  )
}

export default Beer