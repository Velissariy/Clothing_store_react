import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCatalogItems} from "../../redux/catalogSlice";
import CatalogItem from "../CatalogItem";
import CatalogPagination from "../CatalogPagination";
import {setCurrentPage} from '../../redux/catalogSlice'

const Catalog = () => {
  const dispatch = useDispatch();
  const {items, loading, error, totalPages, currentPage} = useSelector((state) => state.products);
  const {
    type,
    sizes,
    trendingNow,
    minPrice,
    maxPrice,
    brand,
    category,
    designer
  } = useSelector((state) => state.catalogFilter);

  const generateQueryParams = () => {
    const params = new URLSearchParams();

    if (sizes.length > 0) {
      sizes.forEach(size => params.append("size", size));
    }
    if (trendingNow) {
      params.append("trending_now", trendingNow);
    }
    if (minPrice !== null) {
      params.append("min_price", minPrice);
    }
    if (maxPrice !== null) {
      params.append("max_price", maxPrice);
    }

    if (type !== '') {
      params.append("type", type);
    }

    if (brand !== '') {
      params.append("brand", brand);
    }

    if (category !== '') {
      params.append("category", category);
    }

    if (designer !== '') {
      params.append("designer", designer);
    }

    params.append("page", currentPage);

    return params.toString();
  };

  useEffect(() => {
    const queryParams = generateQueryParams();
    dispatch(fetchCatalogItems(`https://lepihov.by/api-fashion-shop/catalog?${queryParams}`));
  }, [sizes, trendingNow, minPrice, maxPrice, currentPage, category, brand, designer, type]);

  const handleChangePage = (page) => {
    dispatch(setCurrentPage(page));
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="catalogItems">
        {items.map((item) => (
          <CatalogItem key={item.id} item={item}/>
        ))}
      </div>
      {totalPages > 0 && (
        <CatalogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          handleChangePage={handleChangePage}
        />
      )}
    </>
  );
};

export default Catalog;