import React, {useEffect} from 'react';
import Banner from "../components/Banner";
import Advantages from "../components/Advantages";
import Sections from "../components/CatalogSections";
import Fetured from "../components/CatalogFetured";
import {setBrand, setCategory, setDesigner, setType} from "../redux/catalogFilterSlice";
import {setCurrentPage} from "../redux/catalogSlice";
import {useDispatch} from "react-redux";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setType(''));
    dispatch(setBrand(''));
    dispatch(setDesigner(''));
    dispatch(setCategory(''));
    dispatch(setCurrentPage(1));
  }, []);

  return (
    <>
      <Banner/>
      <Sections/>
      <Fetured/>
      <Advantages/>
    </>
  );
};

export default Main;