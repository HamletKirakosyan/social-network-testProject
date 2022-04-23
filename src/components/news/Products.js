import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
   .then(res => res.json())
   .then(res => setProducts(res.title));
 }, []);

 /*  useEffect(() => {
     fetch(`https://dummyjson.com/products/search?q=${searchParams.get("key")}`)
    .then(res => res.json())
    .then(res => setSearchParams(res.title));
  }, [searchParams]);
 */
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target);
  };

  const handleButtonClick = () => {
   fetch(`https://dummyjson.com/products/search?q=${inputValue}`)
  .then(res => res.json())
  .then(res => setInputValue(res.products));  
  setInputValue("");     
  }

  return (
    <div className='news'>
      <input value={inputValue} onChange={handleInputChange}/>
      <button disabled={inputValue.length<3} onClick={handleButtonClick}>Change value</button>

     {products.map((product) => {
       return (
       <div>
         <Link to={`products/:${product.id}`} key={product.id}>{product.title}</Link>
       </div>
       )
     })}
    </div>
  )
}

export default Products;