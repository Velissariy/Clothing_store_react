import React from 'react';
import Advantages from "../components/Advantages";
import ProductsCatalog from "../components/CatalogProducts";
import CatalogFilter from "../components/CatalogFilter";
import Breadcrumbs from "../components/Breadcrumbs";

const Catalog = () => {
  return (
    <>
      <Breadcrumbs/>
      <section className="catalog container">
        <CatalogFilter/>
        <ProductsCatalog/>
      </section>
      <Advantages/>
    </>
  );
};

export default Catalog;