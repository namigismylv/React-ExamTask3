import React from 'react'
import BasketTable from '../../../Components/Site/BasketTable/BasketTable'
import { useContext } from 'react'
import MainContext from '../../../Context/Context'
import { Helmet } from 'react-helmet'
const Basket = () => {
    const { basketItems } = useContext(MainContext)
    return (
        <>
        <Helmet>
            <title>Cart</title>
        </Helmet>
            <BasketTable  basketItems={basketItems}/>
        </>
    )
}

export default Basket