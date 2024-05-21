import React from "react";
import { useContext } from "react";

import Card from "../Card/Card";
import "./Cards.css";
import MainContext from "../../../Context/Context";
const Cards = ({ data }) => {
  const { search, setSearch,sort,setSort } = useContext(MainContext);
  return (
    <>
      <div className="container">
        <div className="row" id="filterSearchRow">
          <div className="col-6">
            <input
              type="text"
              className="foodsInput"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {/* <div className="col-6 Filter">
            <select name="cars" id="cars">
              <option onClick={()=>setSort({field:"title",asc:true})} value={sort}>A-Z</option>
              <option onClick={()=>setSort({field:"title",asc:false})} value={sort}>Z-A</option>
            </select>
          </div> */}
        </div>
        <div className="row">
          {data.map((dataHomeItem, index) => {
            return <Card dataHomeItem={dataHomeItem} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
