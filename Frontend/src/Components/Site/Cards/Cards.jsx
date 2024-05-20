import React from 'react'
import { useContext } from 'react'

import Card from '../Card/Card'
import './Cards.css'
import MainContext from '../../../Context/Context'
const Cards = ({data}) => {
    const {search,setSearch} = useContext(MainContext)
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <input type="text" className="foodsInput" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)} />
                    </div>

                </div>
                <div className="row">
                    {
                        data.map((dataHomeItem,index)=>{
                            return(
                                <Card dataHomeItem={dataHomeItem} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Cards