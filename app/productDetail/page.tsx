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
import UseProduct from "../(custom-hooks)/useProduct";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
// import Router from "@/(components)/router";
import { useSearchParams } from "next/navigation";

export default function ProductDetail() {
  const {
    // product,
    increment,
    decrement,
    quantity,
    setQuantity,
    isDisabled,
    
  } = UseProduct();
// const{
//   router
// }=Router()
const searchParams=useSearchParams()
  const id=searchParams.get('id')
  
  console.log(id);
  
  
  return (
    <>
      <Flex h="800px" justifyContent={"space-evenly"}>
        <Box>

          <Heading>{id.image}</Heading>
        </Box>
        <Box>
          <Heading>{id.title}</Heading>
          <Text mt="30px">${id.price}</Text>
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
    </>
  );
}
