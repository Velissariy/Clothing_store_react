import React, {useEffect} from 'react';
import ProductSlider from "../components/ProductSlider";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchProduct} from "../redux/productSlice";
import ProductDescription from "../components/ProductDescription";

const CatalogProduct = () => {
  const {productId} = useParams();

  const dispatch = useDispatch();
  const {product, loading, error} = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct(`https://lepihov.by/api-fashion-shop/catalog/${productId}`));
  }, [productId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {product && (
        <>
          <ProductSlider product={product}/>
          <ProductDescription product={product}/>
        </>
      )}
    </>
  );
};

export default CatalogProduct;