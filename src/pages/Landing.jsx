import React, { Fragment } from "react";
import { FeaturedProducts, Hero } from "../components";

import { customFetch } from "../utils";
const url = "/products?featured=true";

const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  const products = response.data.data;
  return { products };
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
