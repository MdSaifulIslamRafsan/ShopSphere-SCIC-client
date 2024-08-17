import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white border border-gray-200">
      <img className="w-full h-60 bg-center object-cover" src={product.productImage} alt={product.productName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{product.productName}</div>
        <p className="text-gray-700 text-base mb-4">{product.description}</p>
        <div className="flex items-center mb-4">
          <span className=" text-gray-600">Category: {product.category}</span>
        </div>
        <div className="flex items-center mb-4">
          <span className=" text-gray-600">Ratings: {product.ratings} ★</span>
        </div>
        <div className="flex items-center mb-4">
          <span className=" text-gray-600">Brand: {product.brand}</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-semibold text-gray-900">${product.price}</span>
          <div className="text-sm text-gray-500">
          <span>Created: {product.creationDate}</span>
        </div>
        </div>
        
        <button className="bg-blue-500 w-full mt-4 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all">
            Add to Cart
          </button>
      </div>
    </div>
  );
};

export default ProductCard;
