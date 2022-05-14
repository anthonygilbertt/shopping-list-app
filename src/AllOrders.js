import { useEffect, useState } from "react";
// import BlogList from "./BlogList";
// import useFetch from "./useFetch";

const MyOrders = () => {
//   const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="my-orders">
      {/* { error && <div>{ error }</div> }
      
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> } */}
      <h1 className="text-1xl font-bold underline">All Orders</h1>
      <h5 className={"text-gray-400 text-1xl"}>(only visible If logged in as Admin)</h5>
      <table className="table-auto">
  <thead>
    <tr>
      <th className="px-4 py-2">Title</th>
      <th className="px-4 py-2">Author</th>
      <th className="px-4 py-2">Views</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border px-4 py-2">Intro to CSS</td>
      <td className="border px-4 py-2">Adam</td>
      <td className="border px-4 py-2">858</td>
    </tr>
    <tr className="bg-gray-100">
      <td className="border px-4 py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
      <td className="border px-4 py-2">Adam</td>
      <td className="border px-4 py-2">112</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Intro to JavaScript</td>
      <td className="border px-4 py-2">Chris</td>
      <td className="border px-4 py-2">1,280</td>
    </tr>
  </tbody>
</table>
    </div>
  );
}
 
export default MyOrders;