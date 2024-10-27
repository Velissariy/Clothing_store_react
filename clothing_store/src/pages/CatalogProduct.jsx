import React, {useEffect} from 'react';
import ProductSlider from "../components/ProductSlider";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearProduct, fetchProduct} from "../redux/productSlice";
import ProductDescription from "../components/ProductDescription";
import {useApi} from "../contexts/apiContext";
import Breadcrumbs from "../components/Breadcrumbs";

const CatalogProduct = () => {
  const {productId} = useParams();

  const dispatch = useDispatch();
  const {product, loading, error} = useSelector((state) => state.product);

  const apiUrl = useApi();

  useEffect(() => {
    dispatch(fetchProduct(`${apiUrl}/catalog/${productId}`));

    return () => {
      dispatch(clearProduct());
    };
  }, [productId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {product && (
        <>
          <Breadcrumbs/>
          <ProductSlider product={product}/>
          <ProductDescription product={product}/>
        </>
      )}
    </>
  );
};

export default CatalogProduct;