import React from 'react'
import { Link } from "react-router-dom";
import './Card.css'
const Card = ({ dataHomeItem }) => {
    return (
        <div className="col-4">
            <Link to={`details/${dataHomeItem._id}`}>
            <div class="card" >
                <img src={dataHomeItem.image}  class="card-img-top" alt="..." />
                <div class="body">
                    <h4 class="card-text">{dataHomeItem.title}</h4>
                    <p class="card-desc">{dataHomeItem.desc}</p>
                    <Link to="" className="learnMore">Learn more <i class="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Card