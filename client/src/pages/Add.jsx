import { useState } from "react";
import axios from "axios";

export default function Add() {
  const [formValues, setFormValues] = useState({
    name: "",
    price: "",
    category: "food",
    description: "",
  });
  const [file, setFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select an image file");
      return;
    }

    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("price", formValues.price);
    formData.append("category", formValues.category);
    formData.append("description", formValues.description);
    formData.append("image", file);

    axios.post("http://localhost:3000/add", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    alert("Product added successfully!");
    setFormValues({
      name: "",
      price: "",
      category: "food",
      description: "",
    });
    setFile(null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-purple-300 to-purple-200">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold text-purple-700 mb-4">Add Product</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-purple-700">Name</label>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              placeholder="Product Name"
              className="w-full border border-purple-300 p-2 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-purple-700">Price</label>
            <input
              type="number"
              name="price"
              value={formValues.price}
              onChange={handleInputChange}
              placeholder="Product Price"
              className="w-full border border-purple-300 p-2 rounded-md"
              required
              min="0.01"
              step="0.01"
            />
          </div>

          <div>
            <label className="block text-purple-700">Category</label>
            <select
              name="category"
              value={formValues.category}
              onChange={handleInputChange}
              className="w-full border border-purple-300 p-2 rounded-md"
              required
            >
              <option value="food">Food</option>
              <option value="drink">Drink</option>
            </select>
          </div>

          <div>
            <label className="block text-purple-700">Description</label>
            <input
              type="text"
              name="description"
              value={formValues.description}
              onChange={handleInputChange}
              placeholder="Product Description"
              className="w-full border border-purple-300 p-2 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-purple-700">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              accept="image/*"
              className="w-full border border-purple-300 p-2 rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-2 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
