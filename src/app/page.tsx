"use client";

import React, { useEffect, useState } from "react";

const About = () => {
  const [products, setProducts] = useState<any[]>([]);

  const getProducts = async () => {
    const res = await fetch(
      "https://68466fef7dbda7ee7aaf060c.mockapi.io/product"
    );
    const data = await res.json();
    setProducts(data);
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`https://68466fef7dbda7ee7aaf060c.mockapi.io/product/${id}`, {
        method: "DELETE",
      });
      setProducts((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("O'chirishda xatolik:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.name}</p>
            <button
              onClick={() => handleDelete(item.id)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
