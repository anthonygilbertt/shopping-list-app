import { useEffect, useState } from "react";
// import BlogList from "./BlogList";
// import useFetch from "./useFetch";

const Login = () => {

  return (
    <div className="justify-center pl-6 flex flex-row min-h-screen justify-center pt-20">
      
      <div className="w-full max-w-xs">
        <h1 className="text-sky-400 text-4xl pb-3  underline pb-3">Order a Product</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product">
            Product Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Product name"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Description
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Description"/>
            {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Add Product
            </button>
          </div>
        </form>
      </div>
            
    </div>
  );
}
 
export default Login;