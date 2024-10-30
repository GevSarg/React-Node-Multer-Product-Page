import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3000/${id}`).then(() => {
      setProducts(products.filter((prod) => prod._id !== id));
    });
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-purple-300 to-purple-200 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">Our Products</h1>
      <Link
        to={"/add"}
        className="mb-8 px-6 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition duration-300"
      >
        Add Product
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {products.map((prod) => (
          <div
            key={prod._id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <img
              src={`http://localhost:3000/uploads/${prod.image}`}
              alt={prod.name}
              className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 transform hover:scale-105"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">
              {prod.name}
            </h2>
            <p className="text-purple-600 text-xl font-semibold mb-4">
              ${prod.price.toFixed(2)}
            </p>
            <p className="text-gray-600 text-xl font-semibold mb-4">
              {prod.description}
            </p>
            <div className="flex justify-between w-full space-x-2 text-center">
              <button
                onClick={() => deleteProduct(prod._id)}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 w-1/2 font-bold"
              >
                Delete
              </button>
              <Link
                to={`/edit/${prod._id}`}
                className="bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition duration-300 w-1/2 font-bold"
              >
                Edit
              </Link>
            </div>
            <Link
              to={`/${prod._id}`}
              className="bg-purple-600 mt-2 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300 w-full font-bold text-center"
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
