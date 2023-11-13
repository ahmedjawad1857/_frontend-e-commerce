"use client";
import {
  Box,
  FormControl,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  FormLabel,
  Textarea,
  Select,
} from "@chakra-ui/react";

import { useState } from "react";
import axios from "axios";
export default function Admin() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("");
   const addProduct=async ()=>{
 try{ const addedProduct=axios.post('http://localhost:8020/',{
     title:title,
     description:description,
     image:image,
     quantity:quantity,
     price:price,
     category:category,
 })
 }catch(e){

    console.log('adding product error',e);
    
 }


 }
// const logs=()=>{
//     console.log('title:',title);
//     console.log('image:',image);
//     console.log('description:',description);
//     console.log('quantity:',quantity);
//     console.log('category:',category);
//     console.log('price:',price);
    
// }

  return (
    <>
      <Box>
        <Heading>Admin Form</Heading>

        <FormControl w="500px">
          <FormLabel>Title</FormLabel>

          <Input
            type="text"
            placeholder="Enter Title of your product"
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl w="500px">
          <FormLabel>Description</FormLabel>

          <Textarea placeholder='Enter your product description' onChange={(e)=>setDescription(e.target.value)} />
        </FormControl>
        <FormControl w="500px">
          <FormLabel>Image</FormLabel>

          {/* <Input
            type="file"
            onChange={(e) => setImage(e.target.files)}
          /> */}
          <Input type="text" placeholder="enter about your product image" onChange={(e)=>setImage(e.target.value)}/>
        </FormControl>
        <FormControl w="500px">
          <FormLabel>Category</FormLabel>

         <Select  onChange={(e)=>setCategory(e.target.value)}>
            <option disabled selected hidden value="Select Your product category">Select Your product category</option>
            <option value="BedSheet">BedSheet</option>
    
            <option value="mensClothing">mensClothing</option> 
            <option value="womensClothing">womensClothing</option> 

            <option value="homeDecor">homeDecor</option>
            <option value="jaiNamaz-prayer mat">jaiNamaz-prayer mat</option>
            <option value="tasbeeh">tasbeeh</option>
         </Select>
        </FormControl>
        
        
        <FormControl>
          <FormLabel>Quantity</FormLabel>
          <NumberInput w="500px" defaultValue={1} min={1}>
            <NumberInputField onChange={(e) => setQuantity(e.target.value)} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Price</FormLabel>
          <NumberInput w="500px" defaultValue={0.00} min={0}>
            <NumberInputField onChange={(e) => setPrice(e.target.value)} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <Button onClick={()=>addProduct()} backgroundColor={' rgb(240, 175, 10)'} color="white">

        Add Product

        </Button>
      </Box>
    </>
  );
}
