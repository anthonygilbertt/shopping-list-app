import { useState, useEffect } from 'react'
import { API } from 'aws-amplify'
import { listOrders } from '../src/graphql/queries'

export default function Home() {
  const [ orders, setOrders ] = useState([])

  useEffect(() => {
    fetchOrders()
  }, [])

  async function fetchOrders() {
    const orderData = await API.graphql({
      query: listOrders
    });
    setOrders(orderData.data.listOrders.items)
  }

  return (
    <div>
      <h1 className={"text-sky-400 text-6xl"}>  
      </h1>
      {
       orders.map((order, index) => {
         <p>{order.title}</p>
       })
      }
    </div>
  )
}
