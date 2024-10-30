import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({ price: 0 });

  useEffect(() => {
    axios(`http://localhost:3000/${id}`).then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
  }, [id]);

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-purple-300 to-purple-200 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-purple-600 mb-6 text-center">
        {product.name}
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-full max-w-md transition-transform duration-300 transform hover:scale-105">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md mb-4 transition-opacity duration-300 hover:opacity-80"
        />
        <p className="text-gray-800 text-lg font-semibold mb-2">
          Price:{" "}
          <span className="text-purple-600">${product.price.toFixed(2)}</span>
        </p>
        <p className="text-gray-600 text-xl font-semibold mb-4">
          {product.description}
        </p>
        <p className="text-gray-600 text-md mb-4">
          Category:{" "}
          <span className="font-medium text-purple-600">
            {product.category}
          </span>
        </p>
      </div>
    </div>
  );
}
