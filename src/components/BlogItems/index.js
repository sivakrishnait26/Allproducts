import React, { useState, useEffect } from "react";

import "./index.css";

const BlogItems = () => {
  const [products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(true);
  const url = " https://api.escuelajs.co/api/v1/products";
  const options = {
    method: "GET",
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.log(err));
  }, []);

  return (
    <div>
      {Loading ? (
        <p>Data Loading ...</p>
      ) : (
        <ul className="list-container">
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.images} className="product-image" />
              <div className="content">
                <h1 className="heading">price: {product.price}</h1>
                <p className="description">{product.title}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default BlogItems;
