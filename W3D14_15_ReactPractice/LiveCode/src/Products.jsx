import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Products() {
  // const [productInfo, setProductInfo] = useState([]);
  // const [info, setInfo] = useState({});
  const [productAll, setProductAll] = useState({products: [],total: null, skip:null, limit: null})

  useEffect(() => {
    const getProductInfo = () => {
      return fetch("https://dummyjson.com/products/search?q=phone")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // setProductInfo(data.products);
          // setInfo({ total: data.total, skip: data.skip, limit: data.limit });
          setProductAll(data);
        });
    };
    getProductInfo();
  }, []);

  const {total, skip, limit} = productAll;
  return (
    <div>
      <h1>Products</h1>
      {
        <div>
          {/* <p>{info.total}</p>
          <p>{info.skip}</p>
          <p>{info.limit}</p> */}
          <p>{total}</p>
          <p>{skip}</p>
          <p>{limit}</p>
        </div>
      }
      {productAll.products.map((product) => {
        const { id, title, price, brand } = product;
        return (
          <div key={id}>
            <p>Title: {title}</p>
            <p>Price: {price}</p>
            <p>Brand: {brand}</p>
            {/* <p>Description: {description}</p> */}
          </div>
        );
      })}
    </div>
  );
}
