"use client";

import Cards from "@/app/(components)/card";
import TopSalesCard from "@/app/(components)/topSalesCard";
import { Heading, Grid, GridItem, Center, Spinner } from "@chakra-ui/react";

import axios from "axios";
import { useState, useEffect } from "react";

export default function HomeDecor() {
  useEffect(() => {
    gettingData();
  });
  const [allProducts, setAllProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const gettingData = async () => {
    try {
      const findedData = await axios.get("http://localhost:8020/get");
      const finded = findedData.data.findedData;
      const filteredData = finded.filter(
        (item: any) => item.category == "homeDecor"
      );
      const featuredProduct2 = filteredData.filter(
        (item: any) => item.quantity !== 0
      );
      const featuredProduct = featuredProduct2.slice(0, 4);

       
        setFeaturedProducts(featuredProduct);
        console.log("featuredProduct", featuredProduct);
      

      setAllProducts(filteredData);
    } catch (e) {
      console.log("getting error", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Heading textAlign={"center"}>
        Welcome to our <b>homeDecor</b> section
      </Heading>
      <Heading>Featured products</Heading>
      {loading ? (
        <Center mt="10px">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      ) : (
        <>
          <Cards product={featuredProducts} />

          <Heading mt="30px">Our Products</Heading>

          <Cards product={allProducts} />
        </>
      )}
    </>
  );
}
