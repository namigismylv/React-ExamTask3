import { } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ROUTES from './Routes/Routes'
import MainContext from './Context/Context'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';

function App() {
  const [data, setData] = useState([])
  const routes = createBrowserRouter(ROUTES)
  const [basketItems, setBasketItems] = useState(localStorage.getItem("basketItems") ? JSON.parse(localStorage.getItem("basketItems")) : [])
  const [search,setSearch]=useState("")
  useEffect(() => {
    axios.get("http://localhost:7000/foods").then(res => {
      setData(res.data)
      console.log(res);
    })
  }, [])
  useEffect(() => {
    localStorage.setItem("basketItems", JSON.stringify(basketItems))
  }, [basketItems])
  function addToBasket(item) {
    const target = basketItems.find(x => x.item._id == item._id)
    if (!target) {
      let newBasketItem={
        item:item
      }    
      setBasketItems([...basketItems, newBasketItem])
    }
  
  }
  function deleteFromBasket(item) {
      setBasketItems([...basketItems.filter(x => x.item._id !== item._id)])
  }
  const contextData = {
    data, setData, basketItems, setBasketItems, addToBasket, deleteFromBasket,search,setSearch
  }

  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={routes} />
    </MainContext.Provider>
  )
}

export default App
