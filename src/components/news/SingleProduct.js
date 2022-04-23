import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function SingleProduct() {
    const [product, setProduct] = useState({});
    const productID = useParams();
    

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productID}`)
        .then(res => res.json())
        .then(res => setProduct(res));
    }, [productID])

  return (
    <div>{product?.title}</div>
  )
}
