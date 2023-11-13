"use client";

import Cards from "@/(components)/card";
import TopSalesCard from "@/(components)/topSalesCard";
import { Heading, Grid, GridItem } from "@chakra-ui/react";

import axios from "axios";
import { useState, useEffect } from "react";

export default function HomeDecor() {
  useEffect(() => {
    gettingData();
  });
  const [allProducts, setAllProducts] = useState([]);
  const gettingData = async () => {
    try {
      const findedData = await axios.get("http://localhost:8020/get");
      const finded = findedData.data.findedData;
      const filteredData = finded.filter(
        (item: any) => item.category == "homeDecor"
      );
      console.log("filtered Data", filteredData);
      console.log("finded Data", findedData.data.findedData);
      setAllProducts(filteredData);
    } catch (e) {
      console.log("getting error", e);
    }
  };

  return (
    <>
      <Heading textAlign={"center"}>
        Welcome to our <b>Home Decoration</b> section
      </Heading>

      <Heading>Top Sales</Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} key="index">
        <GridItem>
          <TopSalesCard image="https://razzidesigns.com/wp-content/uploads/2023/08/20230823_005835-300x300.jpg" />
        </GridItem>

        <GridItem>
          <TopSalesCard image="https://razzidesigns.com/wp-content/uploads/2022/06/ayat-kareema-table-top-300x300.jpg" />
        </GridItem>

        <GridItem>
          <TopSalesCard image="https://razzidesigns.com/wp-content/uploads/2022/10/il_1588xN.3755845437_mw08-300x300.jpg" />
        </GridItem>
        <GridItem>
          <TopSalesCard image="https://razzidesigns.com/wp-content/uploads/2022/10/il_1588xN.3755845437_mw08-300x300.jpg" />
        </GridItem>
      </Grid>
      <Cards product={allProducts} />
    </>
  );
}
