import React, { Fragment } from "react";
import { FeaturedProducts, Hero } from "../components";

import { customFetch } from '../utils';
const url = '/products?featured=true';

export const loader = async() => {
  const response = await customFetch(url);
  const products = response.data.data
  console.log(products)
  return {products};
};

const Landing = () => {
  return (
    <Fragment>
      {" "}
      <Hero />
      <FeaturedProducts />
    </Fragment>
  );
};

export default Landing;
