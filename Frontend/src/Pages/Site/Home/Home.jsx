import React from 'react'
import Cards from '../../../Components/Site/Cards/Cards'
import { useContext } from 'react'
import MainContext from '../../../Context/Context'
import {Helmet} from "react-helmet";
import "./Home.css"
import Carousel from '../../../Components/Site/Carousel/Carousel';
const Home = () => {
  const {search}=useContext(MainContext)
  const {data,setData}=useContext(MainContext)
  return (
    <>
    <Helmet><title>Home</title></Helmet>
    <Carousel/>
    <section id='foods'>
      <div className="foods__div">
        <Cards  data={data.filter(x=>x.title.toLowerCase().includes(search.toLowerCase()))}/>
      </div>
    </section>
    
    </>
  )
}

export default Home