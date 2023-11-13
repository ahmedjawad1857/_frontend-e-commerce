"use client";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import UseProduct from "../(custom-hooks)/useProduct";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { on } from "events";

export default function ProductDetail() {
  const {
    // product,
    increment,
    decrement,
    quantity,
    setQuantity,
    isDisabled,
    clickHandler,
  } = UseProduct();
  // useEffect(() => {
  //   console.log("product", product);
  // }, [product]);
  // const [product, setProduct] = useState();
  // const gettingDta = async () => {
  //   try {
  //     const data = await axios.post("http://localhost:8020/id", {
  //       message: "message",
  //     });
  //     console.log("data:", data);
  //     console.log("datares", data.data);
  //     setProduct(data.data);
  //   } catch (e) {
  //     console.log("getting in product detail error", e);
  //   }
  // };
  const product=clickHandler()
  // useEffect(() => {
  //   hello();
  // }, []);
  const hello = async() => {
    try{
    // console.log("product", clickHandler());

    const res= await axios.post('http://lacalhost:8020/id',{
      id:"123456677787784326763276"
    })
    console.log('res',res.data);
 
  }
  catch(e){
    console.log('error',e);
    
  }   
  };

  return (
    <>
      <Flex h="800px" justifyContent={"space-evenly"}>
        <Box>
          <Heading>{product.image}</Heading>
        </Box>
        <Box>
          <Heading>{product.title}</Heading>
          <Text mt="30px">${product.price}</Text>
          <Flex align="center">
            {isDisabled ? (
              <IconButton
                disabled
                opacity={0.5}
                cursor={"not-allowed"}
                icon={<MinusIcon />}
                onClick={() => decrement()}
                aria-label="Decrease Quantity"
              />
            ) : (
              <IconButton
                icon={<MinusIcon />}
                onClick={() => decrement()}
                aria-label="Decrease Quantity"
              />
            )}
            <Input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
              min={1}
              max={9} // Set your maximum quantity limit as needed
              width="50px"
              textAlign="center"
            />
            {isDisabled ? (
              <IconButton
                disabled
                icon={<AddIcon />}
                onClick={() => increment()}
                aria-label="Increase Quantity"
              />
            ) : (
              <IconButton
                icon={<AddIcon />}
                onClick={() => increment()}
                aria-label="Increase Quantity"
              />
            )}
          </Flex>
        </Box>
      </Flex>
      <Button onClick={() => hello()}>click me</Button>
    </>
  );
}
