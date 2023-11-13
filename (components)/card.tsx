"use client";
import {
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Stack,
  StackDivider,
  Card,
  Text,
  Divider,
} from "@chakra-ui/react";
import axios from "axios";
import TopSalesCard from "./topSalesCard";
import { useState } from "react";
import { useRouter } from "next/navigation";
import UseProduct from "@/app/(custom-hooks)/useProduct";
export default function Cards(props: any) {
  const { productStyle, setHovered, ProductId,clickHandler } = UseProduct();
  return (
    <>
      


      <Heading mt="30px">Our Products</Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} key="index">
        {props.product.map((item: any, index: any) => {
          return (
            <GridItem mt="50px">
              <Link
                style={productStyle}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                // href="/productDetail/"
                onClick={() => ProductId(item._id)}
              >
                <Card>
                  <CardHeader>
                    {/* <Image src=""/> */}
                    <Heading>{item.image}</Heading>
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <Heading>{item.title}</Heading>

                    <Text mt="30px">{item.description.slice(0, 100)}...</Text>

                    <Text mt="30px"> Rs.{item.price}</Text>
                  </CardBody>
                  {/* <CardFooter>
                   <Link href="../cart/page">
                  <Button ml="-10px" onClick={() => ProductId(item._id)}>
                    Add to cart
                  </Button>
                   </Link> 
                </CardFooter> */}
                </Card>
              </Link>
            </GridItem>
          );
        })}
      </Grid>
      <Button onClick={()=>clickHandler()}>click me</Button>

    </>
  );
}
