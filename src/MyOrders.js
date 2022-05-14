// import { useEffect, useState } from "react";
// // import BlogList from "./BlogList";
// // import useFetch from "./useFetch";

// const MyOrders = () => {
// //   const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

//   return (
//     <div className="my-orders">
//       <h1 className={"text-sky-400 text-6xl pb-3  underline pb-3"}>My Orders</h1>
//       <h5 className={"text-gray-400 text-1xl"}>(only visible to me)</h5>
//       <table className="table-auto">
//   <thead>
//     <tr>
//       <th className="px-4 py-2">Title</th>
//       <th className="px-4 py-2">Author</th>
//       <th className="px-4 py-2">Views</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td className="border px-4 py-2">Intro to CSS</td>
//       <td className="border px-4 py-2">Adam</td>
//       <td className="border px-4 py-2">858</td>
//     </tr>
//     <tr className="bg-gray-100">
//       <td className="border px-4 py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
//       <td className="border px-4 py-2">Adam</td>
//       <td className="border px-4 py-2">112</td>
//     </tr>
//     <tr>
//       <td className="border px-4 py-2">Intro to JavaScript</td>
//       <td className="border px-4 py-2">Chris</td>
//       <td className="border px-4 py-2">1,280</td>
//     </tr>
//   </tbody>
// </table>
//     </div>
//   );
// }
 
// export default MyOrders;


import { useEffect, useState } from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from 'aws-amplify'
import { listOrders } from './graphql/queries'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const MyOrders = () => {
  const [ user, setUser] = useState(null)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetchOrders()
    checkUser()
  }, [])

  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser()
    setUser(user)
  }

  async function fetchOrders() {
    try {
      const orderData = await API.graphql(graphqlOperation(listOrders))
      console.log('orderData: ', orderData);
      const orders = orderData.data.listOrders.items
      setOrders(orders)
    }
    catch (err) {
      console.log('error fetching orders: ', err.errors)
        console.log('error fetching orders: ', err.errors[0].message)
    }
  }
  console.log('user', user);
  if(!user) return null

  return (
    <div className="pl-1 pt-10">
      <h1 className={"text-sky-400 text-6xl pb-3 underline pb-3 text-center"}>My Orders</h1>
      <h5 className={"text-gray-400 text-1xl"}></h5>
<div style={styles.container}>
      
      {/* <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addOrder}>Create Order</button> */}
      
      <thead>
        <tr>
          <th className="px-4 py-2">Product</th>
          <th className="px-4 py-2">Description</th>
          <th className="px-4 py-2">Price</th>
        </tr>
      </thead>
      <tbody>
        {
          orders.map((order, index) => (
            <>
              <tr key={index} style={styles.order}>
                <td className="border px-4 py-2">{order.product}</td>
                <td className="border px-4 py-2">{order.description}</td>
                <td className="border px-4 py-2">${order.price}</td>
              </tr>
            {/* <tr className="bg-gray-100">
                <td className="border px-4 py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                <td className="border px-4 py-2">Adam</td>
                <td className="border px-4 py-2">112</td>
              </tr> */}
            </>
          ))
        }
      </tbody>                
    </div>

    </div>
  );
}

const styles = {
  container: { width: 500, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  order: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  orderName: { fontSize: 20, fontWeight: 'bold' },
  orderDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

 
export default withAuthenticator(MyOrders);