// "use client";
// import {
//   Button,
//   CardBody,
//   CardFooter,
//   CardHeader,
//   Flex,
//   Grid,
//   GridItem,
//   Heading,
//   Stack,
//   StackDivider,
//   Card,
//   Text,
//   Divider,
//   Image,
// } from "@chakra-ui/react";
// import axios from "axios";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function Cards(props: any) {
//   const [isHovered, setHovered] = useState(false);

//   const productStyle = {
//     textDecorationLine: isHovered ? "none" : "none",
//   };

//   const isProductSoldOut = (item: any) => {
//     // Check if the product is sold out based on its stock
//     return item.quantity == 0;
//   };

//   return (
//     <>
//       <Heading mt="30px">{props.heading}</Heading>
//       <Grid templateColumns="repeat(4, 1fr)" gap={6}>
//         {props.product.map((item: any, index: any) => {
//           return (
//             <GridItem mt="50px" key={index}>
//               <Link
//                 // style={productStyle}
//                 onMouseEnter={() => setHovered(true)}
//                 onMouseLeave={() => setHovered(false)}
//                 href={{
//                   pathname: "/productDetail/",
//                   query: { _id: item._id },
//                 }}
//               >
//                 <Card w="300px">
//                   <CardHeader>
//                     <Image src={item.image} alt={item.title} />
//                     {isProductSoldOut(item) && (
//                       <Text
//                         position="absolute"
//                         bottom="5px"
//                         right="5px"
//                         color="red"
//                       >
//                         Sold Out
//                       </Text>
//                     )}
//                   </CardHeader>
//                   <Divider />
//                   <CardBody>
//                     <Heading>{item.title}</Heading>
//                     <Text mt="30px">{item.description.slice(0, 100)}...</Text>
//                     <Text mt="30px"> Rs.{item.price}</Text>
//                   </CardBody>
//                 </Card>
//               </Link>
//             </GridItem>
//           );
//         })}
//       </Grid>
//     </>
//   );
// }
"use client";
import {
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  Card,
  Text,
  Divider,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

export default function Cards(props: any) {
  const [isHovered, setHovered] = useState(false);
  const [remainingStock, setRemainingStock] = useState();
  const productStyle = {
    textDecorationLine: isHovered ? "none" : "none",
  };

  // const isProductSoldOut = (item: any) => {
  //   // Check if the product is sold out based on its stock
  //   return item.quantity == 0;
  // };
  const soldOut = (quantity: number) => {
    return quantity <= 0;
  };
  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {props.product &&
          props.product.map((item: any, index: any) => (
            <GridItem mt="50px" key={index}>
              <Link
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                href={{
                  pathname: "/productDetail/",
                  query: { _id: item._id, quantity: item.quantity },
                }}
              >
                <Card w="300px">
                  <CardHeader>
                    <Image src={item.image} alt={item.title} h="200px" />
                    {soldOut(item.quantity) && (
                      <Text
                        position="absolute"
                        bottom="5px"
                        right="5px"
                        color="white"
                        bg="red"
                        p="5px"
                        borderRadius={"10px"}
                      >
                        Sold Out
                      </Text>
                    )}
                  </CardHeader>
                  <Divider />
                  <CardBody>
                    <Heading>{item.title}</Heading>
                    <Text mt="30px">{item.description.slice(0, 100)}...</Text>
                    <Text mt="30px"> Rs.{item.price}</Text>
                  </CardBody>
                </Card>
              </Link>
            </GridItem>
          ))}
      </Grid>
    </>
  );
}
