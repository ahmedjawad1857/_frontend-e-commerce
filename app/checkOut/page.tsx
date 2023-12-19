"use client";

import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
  Divider,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
// import { useRouter } from "next/navigation";
import { Link } from "@chakra-ui/next-js";

const CheckOut = (searchParams: any) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [state, setState] = useState("");
  const [remainingStock1, setRemainingStock1] = useState();
  const cartObj = searchParams.searchParams?.cartObj || "";
  const buyObj = searchParams.searchParams?.buyObj || "";
  const total = searchParams.searchParams?.total || 0;
  let cartRemainingStock = searchParams.searchParams?.cartRemainingStock || 0;
  let buyRemainingStock = searchParams.searchParams?.buyRemainingStock || 0;
  let cartId = searchParams.searchParams?.cartId || "";
  let buyId = searchParams.searchParams?.buyId || "";
  let cartQuantity = searchParams.searchParams?.cartQuantity || 0;
  let buyQuantity = searchParams.searchParams?.buyQuantity || 0;

  let datas: any = null;
  let remainingStock: any;
  let id: any;
  let quantity:any;
  try {
    datas = cartObj ? JSON.parse(cartObj) : buyObj ? JSON.parse(buyObj) : null;
    remainingStock = cartRemainingStock
      ? cartRemainingStock
      : buyRemainingStock
      ? buyRemainingStock
      : null;
    id = cartObj ? cartId : buyObj ? buyId : null;
    quantity = cartObj ? cartQuantity : buyObj ? buyQuantity : null;

    console.log("objArray", datas);
    console.log("id", id);
    console.log("quantity", quantity);
    console.log("remainingStock before minus", remainingStock);
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
  let dataArray: any[] = [];

  if (Array.isArray(datas)) {
    dataArray = datas;
  } else if (datas) {
    dataArray.push(datas);
  }
  console.log("cartObj", cartObj);
  console.log("buyObj", buyObj);
  // console.log("quantity1", quantity1);

  // const datas = cartObj
  //   ? JSON.parse(cartObj)
  //   : buyObj
  //   ? JSON.parse(buyObj)
  //   : null;
  console.log("datas", datas);
  console.log("total", total);
  const postingData = async () => {
    try {
      const products = dataArray.map((item: any) => ({
        productId: id,
        remainingStock: remainingStock - quantity,
      }));
      console.log("remainingStockofProducts", products);
      const checkoutDetails = dataArray.map((item: any) => ({
        productId: item._id,
        quantity: item.quantity,
        description: item.description,
        title: item.title,
        image: item.image,
        total: item.price * item.quantity,
      }));

      console.log("Sending checkout details...", {
        firstName,
        lastName,
        country,
        city,
        address,
        mobileNumber,
        emailAddress,
        state,
        checkoutDetails,
        products,
      });

      const data: any = await axios.post("http://localhost:8020/checkOut", {
        firstName,
        lastName,
        country,
        city,
        address,
        mobileNumber,
        emailAddress,
        state,
        checkoutDetails,
        products,
      });

      console.log("Response from server:", data);
      const deletedCart = await axios.post("http://localhost:8020/deleteCart", {
        data: datas,
      });

      console.log("Cart deleted successfully", deletedCart.data);
      // useRouter().push("/");
    } catch (e) {
      console.error("Error in sending checkOut details:", e);
    }
  };
  // const cartKey = dataect.keys(data);
  // const buyKey = dataect.keys(buydata);
  return (
    <Box mt="10px">
      <Heading textAlign={"center"}>Check Out Form</Heading>
      <Flex
        mt="10px"
        borderRadius={"10px"}
        border={"1px solid black"}
        justifyContent={"space-between"}
        ml="60px"
        mr="60px"
        flexWrap={"wrap"}
      >
        <Box mt="10px">
          <Heading>Billing Detail</Heading>
          <form>
            <Flex gap="30px">
              <FormControl>
                <FormLabel>
                  FirstName <sup style={{ color: "red" }}>*</sup>
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Enter Your First Name"
                  isRequired
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>
                  LastName <sup style={{ color: "red" }}>*</sup>
                </FormLabel>
                <Input
                  type="text"
                  placeholder="Enter Your Last Name"
                  isRequired
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FormControl>
            </Flex>
            <FormControl mt="20px">
              <FormLabel>
                Country/Region <sup style={{ color: "red" }}>*</sup>
              </FormLabel>
              <Input
                type="text"
                placeholder="Enter Your Country Name"
                isRequired
                onChange={(e) => setCountry(e.target.value)}
              />
            </FormControl>
            <FormControl mt="20px">
              <FormLabel>
                Street Address <sup style={{ color: "red" }}>*</sup>
              </FormLabel>
              <Input
                type="text"
                placeholder="Enter Your Street Address"
                isRequired
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormControl>
            <FormControl mt="20px">
              <FormLabel>
                Town/City <sup style={{ color: "red" }}>*</sup>
              </FormLabel>
              <Input
                type="text"
                placeholder="Enter Your City name"
                isRequired
                onChange={(e) => setCity(e.target.value)}
              />
            </FormControl>
            <FormControl mt="20px">
              <FormLabel>
                State/County <sup style={{ color: "red" }}>*</sup>
              </FormLabel>
              <Input
                type="text"
                placeholder="Enter Your State"
                isRequired
                onChange={(e) => setState(e.target.value)}
              />
            </FormControl>
            <FormControl mt="20px">
              <FormLabel>
                Phone No. <sup style={{ color: "red" }}>*</sup>
              </FormLabel>
              <Input
                type="text"
                placeholder="Enter Your Phone No."
                isRequired
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </FormControl>
            <FormControl mt="20px">
              <FormLabel>
                Email Address <sup style={{ color: "red" }}>*</sup>
              </FormLabel>
              <Input
                type="email"
                placeholder="Enter Your Email Address"
                isRequired
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </FormControl>
            <FormControl mt="20px">
              <Link href="/">
                <Button
                  type="submit"
                  bgColor="salmon"
                  color="white"
                  onClick={() => postingData()}
                >
                  Place Order
                </Button>
              </Link>
            </FormControl>
          </form>
        </Box>
        <Box
          w="500px"
          border={"1px solid #ebebeb"}
          borderRadius={"10px"}
          mt="10px"
        >
          <Heading>Your Order</Heading>
          <Divider />
          <Flex
            mt="10px"
            mb="10px"
            ml="10px"
            mr="10px"
            fontSize={"20px"}
            justifyContent={"space-between"}
          >
            <Text>Product Detail</Text>
            <Text>SubTotal</Text>
          </Flex>
          <Divider />
          {dataArray.map((item: any, index: any) => {
            // const quantity = Array.isArray(datas) ? item.quantity : quantity1;

            return (
              <>
                <Flex
                  key={index}
                  mt="10px"
                  mb="10px"
                  fontSize={"20px"}
                  ml="10px"
                  mr="10px"
                  justifyContent={"space-between"}
                >
                  <Box>
                    <Image
                      h="100px"
                      w="100px"
                      src={item.image}
                      alt={item.title}
                    />
                    <Text>
                      {item.title} x {quantity}
                    </Text>
                  </Box>
                  <Text>{item.price * quantity}</Text>
                </Flex>
                {quantity}
                <Divider />
              </>
            );
          })}
          <Flex
            mt="10px"
            mb="10px"
            fontSize={"20px"}
            ml="10px"
            mr="10px"
            justifyContent={"space-between"}
          >
            <Text>SubTotal</Text>
            <Text>{total}</Text>
          </Flex>
          <Divider />
          <Flex
            mt="10px"
            mb="10px"
            fontSize={"20px"}
            ml="10px"
            mr="10px"
            justifyContent={"space-between"}
          >
            <Text>Dilivery Charges</Text>
            <Text>Free</Text>
          </Flex>
          <Divider />
          <Flex
            mt="10px"
            mb="10px"
            fontSize={"20px"}
            ml="10px"
            mr="10px"
            justifyContent={"space-between"}
          >
            <Text>Total</Text>
            <Text>
              {total} remainingStock {remainingStock}
            </Text>
          </Flex>
          <Divider />
        </Box>
      </Flex>
    </Box>
  );
};
export default CheckOut;
