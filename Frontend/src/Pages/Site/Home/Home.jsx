import React from 'react'
import Cards from '../../../Components/Site/Cards/Cards'
import { useContext } from 'react'
import MainContext from '../../../Context/Context'
import {Helmet} from "react-helmet";
import "./Home.css"
import Carousel from '../../../Components/Site/Carousel/Carousel';
const Home = () => {
  const {data,search,sort,setSort}=useContext(MainContext)
  return (
    <>
    <Helmet><title>Home</title></Helmet>
    <Carousel/>
    <section id='foods'>
      <div className="foods__div">
        <Cards  data={data.filter(x=>x.title.toLowerCase().includes(search.toLowerCase()))
        // .sort((a,b)=>{
        //   if(!sort){
        //     return 0;
        //   }
        //   else if(sort.asc==true){
        //     (a[sort.field] > b[sort.field]) ? 1 : ((b[sort.field] > a[sort.field]) ? -1 : 0)

        //   }
        //   else{
        //     (a[sort.field] < b[sort.field]) ? 1 : ((b[sort.field] < a[sort.field]) ? -1 : 0)

        //   }
        // })
        }/>
      </div>
    </section>
    
    </>
  )
}

export default Home