import React from "react";
import { useContext } from "react";
import MainContext from "../../../Context/Context";
import Table from "../../../Components/Admin/Table/Table";
import { Helmet } from "react-helmet";
const Products = () => {
  const { data } = useContext(MainContext);
  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>
      
      <Table data={data} />
    </>
  );
};

export default Products;
