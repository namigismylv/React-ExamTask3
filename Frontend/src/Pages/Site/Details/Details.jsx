import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { useContext } from 'react'
import MainContext from '../../../Context/Context'
import './Details.css'
import { Helmet } from 'react-helmet'
const Details = () => {
  const [item, setItem] = useState({})
  const { id } = useParams()
  const { addToBasket } = useContext(MainContext)
  useEffect(() => {
    axios.get(`http://localhost:7000/foods/${id}`).then(res => {
      setItem(res.data)
    })
  }, [])
  return (
    <div className='details'>
      <Helmet>
        <title>
          {item.title}
        </title>
      </Helmet>
      <div className="container">
        <div className="row" id="detailsRow">
          <div className="col-6">
            <div className="card__img">
              <img src={item.image} width="500px" alt="" />
            </div>
          </div>
          <div className="col-6">
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <button className='btn btn-primary' onClick={() => {
              addToBasket(item)
            }}>Add to Basket</button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Details