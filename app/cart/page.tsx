// // // "use client";
// // // import {
// // //   Box,
// // //   Button,
// // //   Divider,
// // //   Flex,
// // //   Heading,
// // //   IconButton,
// // //   Image,
// // //   NumberDecrementStepper,
// // //   NumberIncrementStepper,
// // //   NumberInput,
// // //   NumberInputField,
// // //   NumberInputStepper,
// // //   Table,
// // //   TableCaption,
// // //   TableContainer,
// // //   Tbody,
// // //   Td,
// // //   Text,
// // //   Tfoot,
// // //   Th,
// // //   Thead,
// // //   Tr,
// // //   useColorModeValue,
// // // } from "@chakra-ui/react";
// // // import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";
// // // import axios from "axios";

// // // import Link from "next/link";
// // // import { useEffect, useState } from "react";
// // // import { increment } from "firebase/database";
// // // import { useRouter } from "next/navigation";
// // // import React from "react";

// // // export default function Cart(searchParams:any) {
// // //   const [cartModified, setCartModified] = useState(false);

// // //     const maxQuantity=searchParams.searchParams.quantity

// // //   useEffect(() => {
// // //     gettingCart();
// // //   }, []);
// // //   const [cart, setCart] = useState([]);
// // //   const [quantity,setQuantity]=useState(1)
// // //   const bg = useColorModeValue("black", "white");
// // //   const color = useColorModeValue("white", "black");
// // //   const gettingCart = async () => {
// // //     try {
// // //       const findedData = await axios.get("http://localhost:8020/gettingCart");
// // //       console.log("findedData", findedData.data.findedData);
// // //       setCart(findedData.data.findedData)

// // //     } catch (e) {
// // //       console.log("getting cart error", e);
// // //     }

// // //   };
// // //   let total=0
// // //   const updateCart = async () => {
// // //     try {
// // //       // Prepare the updated cart data
// // //       const updatedCartData = cart.map((item) => ({
// // //         _id: item._id,
// // //   quantity: quantity}));
// // //       console.log(updatedCartData);

// // //       // Send a request to the server to update the cart
// // //       const updatedCart= await axios.post("http://localhost:8020/updateCart", { cart: updatedCartData });

// // //       console.log(updatedCart.data);

// // //       setCartModified(false);

// // //       // Refresh the cart data after the update
// // //       gettingCart();
// // //     } catch (error) {
// // //       console.error('Error updating cart:', error);
// // //     }
// // //   };
// // //   const router=useRouter()
// // //   const cartItem=async(itemId:any)=>{
// // //     try{
// // //     const sendingId=await axios.post('http://localhost:8020/delete',{
// // //       id:itemId
// // //     })
// // //       console.log('sendingIdData',sendingId.data);

// // //     // setCart(sendingId.data.result)}
// // //      gettingCart()}
// // //     catch(e){
// // //       console.log('sending id error',e);

// // //     }

// // //   }
// // //   const handleQuantityChange = (e:any) => {
// // //     setQuantity(parseInt(e.target.value, 10) || 1);
// // //     // Set cart as modified when the quantity changes
// // //     setCartModified(true);
// // //   };
// // //   const pushToPage=()=>{
// // //     router.push('/')
// // //     console.log('cart',cart);

// // //   }

// // //  console.log('type of cart', typeof cart);

// // //   return (
// // //     <Box>
// // //       {cart.length == 0 ? (
// // //         <Box mt="100px" mb="100px" textAlign={"center"}>
// // //           <Heading fontSize={"5xl"}>Your Shopping Cart is Empty</Heading>
// // //             <Button mt="20px" bg={bg} color={color} onClick={()=>pushToPage()}>
// // //               Continue Shopping
// // //             </Button>
// // //         </Box>
// // //       ) : (
// // //         <Box>
// // //           <Heading textAlign={"center"}>Cart</Heading>

// // //           <Box>
// // //             <TableContainer>
// // //               <Table>
// // //                 <TableCaption>
// // //                   Here you see <b>Your Cart</b>
// // //                 </TableCaption>
// // //                 <Thead>
// // //                   <Tr>
// // //                     <Th colSpan={3} textAlign={"center"}>
// // //                       Products {maxQuantity}
// // //                     </Th>

// // //                     <Th>Price</Th>
// // //                     <Th>Quantity</Th>
// // //                     <Th>SubTotal</Th>
// // //                   </Tr>
// // //                 </Thead>
// // //                 <Divider/>

// // //                 <Tbody>
// // //                   {cart.map((item, index) => {
// // //   const itemSubtotal = item.price * item.quantity;
// // //   console.log('Item:', item);
// // //   console.log('Item Subtotal:', itemSubtotal);

// // //   total += itemSubtotal;
// // // console.log('tottal',total);

// // //                      return (
// // //                       <React.Fragment key={index}>
// // //                       <Tr >
// // //                         <Td>
// // //                           <IconButton icon={<DeleteIcon />} onClick={() => cartItem(item._id)} aria-label={" delete cart"} />
// // //                         </Td>
// // //                         <Td><Image h="70px" w="70px" src={item.image} alt={item.title}/></Td>
// // //                         <Td>{item.title}</Td>
// // //                         <Td>{item.price}</Td>
// // //                         <Td>

// // //                  <NumberInput defaultValue={item.quantity} min={1} max={maxQuantity}  width="80px"
// // //                 textAlign="center">
// // //   <NumberInputField    onChange={handleQuantityChange}
// // //                 />
// // //   <NumberInputStepper>
// // //     <NumberIncrementStepper />
// // //     <NumberDecrementStepper />
// // //   </NumberInputStepper>
// // // </NumberInput>

// // //             </Td>
// // //             <Td>{itemSubtotal}</Td>
// // //                       </Tr>
// // //                                       <Divider/>
// // //                                       </React.Fragment>

// // //                     );
// // //                   })}
// // //                 </Tbody>
// // //                 <Divider/>
// // //                 <Tfoot>

// // //                 <Button onClick={updateCart} isDisabled={!cartModified} color="white" bg="salmon">
// // //           Update Cart
// // //         </Button>

// // //                 </Tfoot>
// // //               </Table>
// // //             </TableContainer>
// // //             <Box w="48%" float={'right'} mt="100px" mb="100px">
// // //   <Text m="20px"><b>Cart Total</b></Text>
// // //   <Divider/>
// // //   <Flex m={'20px'} bg={'GrayText'} justifyContent={'space-between'} >
// // //     <Text>Subtotal:</Text>
// // //     <Text>{total}</Text>
// // //   </Flex>
// // //   <Divider/>
// // //          <Flex m={'20px'} bg={'GrayText'}>
// // //     <Text>Total:</Text>
// // //     <Text>{total}</Text>
// // //   </Flex>
// // //   <Divider/>
// // //   <Link  href={{
// // //                   pathname: "/checkOut/",
// // //                   query: { obj: JSON.stringify(cart), total: total },
// // //                 }}>
// // //   <Button color="white" bg="salmon">Proceed To CheckOut</Button>
// // // </Link>

// // //           </Box>
// // //           </Box>

// // //         </Box>
// // //       )}
// // //     </Box>
// // //   );
// // // }
// // "use client";
// // import {
// //   Box,
// //   Button,
// //   Divider,
// //   Flex,
// //   Heading,
// //   IconButton,
// //   Image,
// //   NumberDecrementStepper,
// //   NumberIncrementStepper,
// //   NumberInput,
// //   NumberInputField,
// //   NumberInputStepper,
// //   Table,
// //   TableCaption,
// //   TableContainer,
// //   Tbody,
// //   Td,
// //   Text,
// //   Tfoot,
// //   Th,
// //   Thead,
// //   Tr,
// //   useColorModeValue,
// // } from "@chakra-ui/react";
// // import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";
// // import axios from "axios";

// // import Link from "next/link";
// // import { useEffect, useState } from "react";
// // import { useRouter } from "next/navigation";
// // import React from "react";

// // export default function Cart(searchParams: any) {
// //   const [cartModified, setCartModified] = useState(false);
// //   const maxQuantity = searchParams.searchParams.quantity;

// //   useEffect(() => {
// //     gettingCart();
// //   }, []);

// //   const [cart, setCart] = useState([]);
// //   const [quantities, setQuantities] = useState([]);
// //   const [total, setTotal] = useState(0);

// //   const bg = useColorModeValue("black", "white");
// //   const color = useColorModeValue("white", "black");

// //   const router = useRouter();

// //   const gettingCart = async () => {
// //     try {
// //       const findedData = await axios.get("http://localhost:8020/gettingCart");
// //       console.log("findedData", findedData.data.findedData);
// //       setCart(findedData.data.findedData);

// //       // Initialize quantities array with default values from the cart
// //       const initialQuantities = findedData.data.findedData.map(
// //         (item) => item.quantity
// //       );
// //       setQuantities(initialQuantities);
// //     } catch (e) {
// //       console.log("getting cart error", e);
// //     }
// //   };

// //   const updateCart = async () => {
// //     try {
// //       // Prepare the updated cart data
// //       const updatedCartData = cart.map((item, index) => ({
// //         _id: item._id,
// //         quantity: quantities[index],
// //       }));
// //       console.log(updatedCartData);

// //       // Send a request to the server to update the cart
// //       const updatedCart = await axios.post("http://localhost:8020/updateCart", {
// //         cart: updatedCartData,
// //       });

// //       console.log(updatedCart.data);

// //       setCartModified(false);

// //       // Refresh the cart data after the update
// //       gettingCart();
// //     } catch (error) {
// //       console.error("Error updating cart:", error);
// //     }
// //   };

// //   const cartItem = async (itemId: any) => {
// //     try {
// //       const sendingId = await axios.post("http://localhost:8020/delete", {
// //         id: itemId,
// //       });
// //       console.log("sendingIdData", sendingId.data);

// //       gettingCart();
// //     } catch (e) {
// //       console.log("sending id error", e);
// //     }
// //   };

// //   const handleQuantityChange = (e, index) => {
// //     const newQuantities = [...quantities];
// //     newQuantities[index] = parseInt(e.target.value, 10) || 1;
// //     setQuantities(newQuantities);
// //     setCartModified(true);
// //   };

// //   const pushToPage = () => {
// //     router.push("/");
// //     console.log("cart", cart);
// //   };

// //   useEffect(() => {
// //     // Calculate total whenever quantities or cart change
// //     let calculatedTotal = 0;
// //     cart.forEach((item, index) => {
// //       const itemSubtotal = item.price * quantities[index];
// //       calculatedTotal += itemSubtotal;
// //     });
// //     setTotal(calculatedTotal);
// //   }, [cart, quantities]);

// //   console.log("type of cart", typeof cart);

// //   return (
// //     <Box>
// //       {cart.length == 0 ? (
// //         <Box mt="100px" mb="100px" textAlign={"center"}>
// //           <Heading fontSize={"5xl"}>Your Shopping Cart is Empty</Heading>
// //           <Button mt="20px" bg={bg} color={color} onClick={() => pushToPage()}>
// //             Continue Shopping
// //           </Button>
// //         </Box>
// //       ) : (
// //         <Box mb="250px">
// //           <Heading textAlign={"center"}>Cart</Heading>

// //           <Box maxW="100%" overflowX="auto" maxH="700px" overflowY="auto">
// //             <TableContainer >
// //               <Table>
// //                 <TableCaption>
// //                   Here you see <b>Your Cart</b>
// //                 </TableCaption>
// //                 <Thead>
// //                   <Tr>
// //                     <Th colSpan={3} textAlign={"center"}>
// //                       Products {maxQuantity}
// //                     </Th>
// //                     <Th>Price</Th>
// //                     <Th>Quantity</Th>
// //                     <Th>SubTotal</Th>
// //                   </Tr>
// //                 </Thead>
// //                 <Divider />

// //                 <Tbody>
// //                   {cart.map((item, index) => {
// //                     const itemSubtotal = item.price * quantities[index];

// //                     return (
// //                       <React.Fragment key={index}>
// //                         <Tr>
// //                           <Td>
// //                             <IconButton
// //                               icon={<DeleteIcon />}
// //                               onClick={() => cartItem(item._id)}
// //                               aria-label={" delete cart"}
// //                             />
// //                           </Td>
// //                           <Td>
// //                             <Image
// //                               h="70px"
// //                               w="70px"
// //                               src={item.image}
// //                               alt={item.title}
// //                             />
// //                           </Td>
// //                           <Td>{item.title}</Td>
// //                           <Td>{item.price}</Td>
// //                           <Td>
// //                             <NumberInput
// //                               defaultValue={quantities[index]}
// //                               min={1}
// //                               max={maxQuantity}
// //                               width="80px"
// //                               textAlign="center"
// //                             >
// //                               <NumberInputField
// //                                 onChange={(e) => handleQuantityChange(e, index)}
// //                               />
// //                               <NumberInputStepper>
// //                                 <NumberIncrementStepper />
// //                                 <NumberDecrementStepper />
// //                               </NumberInputStepper>
// //                             </NumberInput>
// //                           </Td>
// //                           <Td>{itemSubtotal}</Td>
// //                         </Tr>
// //                         <Divider />
// //                       </React.Fragment>
// //                     );
// //                   })}
// //                 </Tbody>
// //                 <Divider />
// //                 <Tfoot>
// //                   <Button
// //                     onClick={updateCart}
// //                     isDisabled={!cartModified}
// //                     color="white"
// //                     bg="salmon"
// //                   >
// //                     Update Cart
// //                   </Button>
// //                 </Tfoot>
// //               </Table>
// //             </TableContainer>
// //             <Box w="48%"
// //   position="absolute"
// //   bottom="20px"  // Adjust the bottom value to provide some spacing from the bottom
// //   right="20px"   // Adjust the right value to provide some spacing from the right
// //   width="48%"
// //   border="1px solid #ebebeb"
// //   p="20px"
// //   backgroundColor="white"
// //   boxShadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
// //   borderRadius="4px"
// //   mb="250px"
// //    >
// //               <Text m="20px">
// //                 <b>Cart Total</b>
// //               </Text>
// //               <Divider />
// //               <Flex m={"20px"} justifyContent={"space-between"}>
// //                 <Text>Subtotal:</Text>
// //                 <Text>{total}</Text>
// //               </Flex>
// //               <Divider />
// //               <Flex m={"20px"} justifyContent={'space-between'}>
// //                 <Text>Total:</Text>
// //                 <Text>{total}</Text>
// //               </Flex>
// //               <Divider />
// //               <Link
// //                 href={{
// //                   pathname: "/checkOut/",
// //                   query: { obj: JSON.stringify(cart), total: total },
// //                 }}
// //               >
// //                 <Button color="white" bg="salmon">
// //                   Proceed To CheckOut
// //                 </Button>
// //               </Link>
// //             </Box>
// //           </Box>
// //         </Box>
// //       )}
// //     </Box>
// //   );
// // }
// "use client";
// import {
//   Box,
//   Button,
//   Divider,
//   Flex,
//   Heading,
//   IconButton,
//   Image,
//   NumberDecrementStepper,
//   NumberIncrementStepper,
//   NumberInput,
//   NumberInputField,
//   NumberInputStepper,
//   Table,
//   TableCaption,
//   TableContainer,
//   Tbody,
//   Td,
//   Text,
//   Tfoot,
//   Th,
//   Thead,
//   Tr,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import {  DeleteIcon} from "@chakra-ui/icons";
// import axios from "axios";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import React from "react";

// export default function Cart(searchParams: any) {
//   const [remainingStock, setRemainingStock] = useState(0);
//   const [cartModified, setCartModified] = useState(false);
//   const maxQuantity = searchParams.searchParams?.quantity || 0;

//   useEffect(() => {
//     gettingCart();
//   }, []);

//   const [cart, setCart] = useState([]);
//   const [quantities, setQuantities] = useState([]);
//   const [total, setTotal] = useState(0);

//   const bg = useColorModeValue("black", "white");
//   const color = useColorModeValue("white", "black");

//   const router = useRouter();
//   const gettingCart = async () => {
//     try {
//       const findedData = await axios.get("http://localhost:8020/gettingCart");
//       console.log("findedData", findedData.data.findedData);
//       setCart(findedData.data.findedData);

//       // Initialize quantities array with default values from the cart
//       const initialQuantities = findedData.data.findedData.map(
//         (item:any) => item.quantity
//       );
//       setQuantities(initialQuantities);
//     } catch (e) {
//       console.log("getting cart error", e);
//     }
//   };

//   // const updateCart = async () => {
//   //   try {
//   //     // Prepare the updated cart data
//   //     const updatedCartData = cart.map((item, index) => ({
//   //       _id: item._id,
//   //       quantity: quantities[index],
//   //     }));
//   //     console.log(updatedCartData);

//   //     // Send a request to the server to update the cart
//   //     const updatedCart = await axios.post("http://localhost:8020/updateCart", {
//   //       cart: updatedCartData,
//   //     });

//   //     console.log(updatedCart.data);

//   //     setCartModified(false);

//   //     // Refresh the cart data after the update
//   //     gettingCart();
//   //   } catch (error) {
//   //     console.error("Error updating cart:", error);
//   //   }
//   // };

//   const cartItem = async (itemId: any) => {
//     try {
//       const sendingId = await axios.post("http://localhost:8020/delete", {
//         id: itemId,
//       });
//       console.log("sendingIdData", sendingId.data);

//       gettingCart();
//     } catch (e) {
//       console.log("sending id error", e);
//     }
//   };

//   // const handleQuantityChange = (e:any, index:any) => {
//   //   const newQuantities = [...quantities];
//   //   newQuantities[index] = parseInt(e.target.value, 10) || 1;
//   //   setQuantities(newQuantities);
//   //   setCartModified(true);

//   //   // Update quantity in MongoDB immediately
//   //   updateCartItemQuantity(cart[index]._id, newQuantities[index]);
//   // };
//   const handleQuantityChange = (e, index) => {
//     const newQuantities = [...quantities];
//     newQuantities[index] = parseInt(e.target.value, 10) || 1;
//     setQuantities(newQuantities);
//     setCartModified(true);
  
//     // Update quantity in MongoDB immediately
//     updateCartItemQuantity(cart[index]._id, newQuantities[index]);
//   };
//   const updateCartItemQuantity = async (itemId:any, newQuantity:any) => {
//     try {
//       const updatedCartData = cart.map((item) => ({
//         _id: item._id,
//         quantity: item._id === itemId ? newQuantity : item.quantity,
//       }));

//       // Send a request to the server to update the cart
//       const updatedCart = await axios.post("http://localhost:8020/updateCart", {
//         cart: updatedCartData,
//       });

//       console.log(`updatedCart ${updatedCart.data}`);

//       // Refresh the cart data after the update
//       gettingCart();
//     } catch (error) {
//       console.error("Error updating cart:", error);
//     }
//   };

//   useEffect(() => {
//     // Calculate total whenever quantities or cart change
//     let calculatedTotal = 0;
//     cart.forEach((item, index) => {
//       const itemSubtotal = item.price * quantities[index];
//       calculatedTotal += itemSubtotal;
//     });
//     setTotal(calculatedTotal);
//   }, [cart, quantities]);
//   const pushToPage=()=>{
//     router.push('/')
//   }
//   const increment=()=>{
//     setQuantities(quantities+1)
//   }
//   const decrement=()=>{
//     setQuantities(quantities-1)
//   }
//   return (
//     <Box>
//       {cart.length == 0 ? (
//         <Box mt="100px" mb="100px" textAlign={"center"}>
//           <Heading fontSize={"5xl"}>Your Shopping Cart is Empty</Heading>
//           <Button mt="20px" bg={bg} color={color} onClick={() => pushToPage()}>
//             Continue Shopping
//           </Button>
//         </Box>
//       ) : (
//         <Box mb="250px">
//           <Heading textAlign={"center"}>Cart</Heading>

//           <Box maxW="100%" overflowX="auto" maxH="700px" overflowY="auto">
//             <TableContainer>
//               <Table>
//                 <TableCaption>
//                   Here you see <b>Your Cart</b>
//                 </TableCaption>
//                 <Thead>
//                   <Tr>
//                     <Th colSpan={3} textAlign={"center"}>
//                       Products {maxQuantity}
//                     </Th>
//                     <Th>Price</Th>
//                     <Th>Quantity</Th>
//                     <Th>SubTotal</Th>
//                   </Tr>
//                 </Thead>
//                 <Divider />

//                 <Tbody>
//                   {cart.map((item, index) => {
//                     const itemSubtotal = item.price * quantities[index];

//                     return (
//                       <React.Fragment key={index}>
//                         <Tr>
//                           <Td>
//                             <IconButton
//                               icon={<DeleteIcon />}
//                               onClick={() => cartItem(item._id)}
//                               aria-label={" delete cart"}
//                             />
//                           </Td>
//                           <Td>
//                             <Image
//                               h="70px"
//                               w="70px"
//                               src={item.image}
//                               alt={item.title}
//                             />
//                           </Td>
//                           <Td>{item.title}</Td>
//                           <Td>{item.price}</Td>
//                           <Td>
//                             <NumberInput
//                               defaultValue={quantities[index]}
//                               min={1}
//                               max={maxQuantity}
//                               width="80px"
//                               textAlign="center"
//                             >
//                               <NumberInputField
//                                 onChange={(e) => handleQuantityChange(e, index)}
//                               />
//                               <NumberInputStepper>
//                                 <NumberIncrementStepper onClick={()=>increment()} />
//                                 <NumberDecrementStepper onClick={()=>decrement()}/>
//                               </NumberInputStepper>
//                             </NumberInput>
//                           </Td>
//                           <Td>{itemSubtotal}</Td>
//                         </Tr>
//                         <Divider />
//                       </React.Fragment>
//                     );
//                   })}
//                 </Tbody>
//                 {/* <Divider />
//                 <Tfoot>
//                   <Button
//                     onClick={updateCart}
//                     isDisabled={!cartModified}
//                     color="white"
//                     bg="salmon"
//                   >
//                     Update Cart
//                   </Button>
//                 </Tfoot> */}
//               </Table>
//             </TableContainer>
//             <Box
//               w="48%"
//               position="absolute"
//               bottom="20px"
//               right="20px"
//               width="48%"
//               border="1px solid #ebebeb"
//               p="20px"
//               backgroundColor="white"
//               boxShadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
//               borderRadius="4px"
//               mb="250px"
//             >
//               <Text m="20px">
//                 <b>Cart Total</b>
//               </Text>
//               <Divider />
//               <Flex m={"20px"} justifyContent={"space-between"}>
//                 <Text>Subtotal:</Text>
//                 <Text>{total}</Text>
//               </Flex>
//               <Divider />
//               <Flex m={"20px"} justifyContent={"space-between"}>
//                 <Text>Total:</Text>
//                 <Text>{total} </Text>
//               </Flex>
//               <Divider />
//               <Link
//                 href={{
//                   pathname: "/checkOut/",
//                   query: { cartObj: JSON.stringify(cart), total: total,remainingStock:maxQuantity },
//                 }}
//               >
//                 <Button color="white" bg="salmon">
//                   Proceed To CheckOut
//                 </Button>
//               </Link>
//             </Box>
//           </Box>
//         </Box>
//       )}
//     </Box>
//   );
// }
// Import necessary components and libraries
"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import useProduct from "../(custom-hooks)/useProduct";

const Cart = (searchParams:any) => {
  const {cart,setCart}=useProduct()
  const [cartModified, setCartModified] = useState(false);
   const [maxQuantity,setMaxQuantity]=useState()
   const [id,setId]=useState()
// let id
  useEffect(() => {
    gettingCart();
  }, []);

  const [quantities, setQuantities] = useState([]);
  const [total, setTotal] = useState(0);

  const bg = useColorModeValue("black", "white");
  const color = useColorModeValue("white", "black");

  const router = useRouter();

  const gettingCart = async () => {
    try {
      const findedData = await axios.get("http://localhost:8020/gettingCart");
      setCart(findedData.data.findedData);

      // Initialize quantities array with default values from the cart
      const initialQuantities = findedData.data.findedData.map(
        (item:any) => item.quantity
      );
      const maxQuantities = findedData.data.findedData.map(
        (item:any) => item.maxQuantity
      );
      setMaxQuantity(maxQuantities)
      const id1 = findedData.data.findedData.map(
        (item:any) => item.productId
      );
      // id=id1
      setId(id1)
      console.log('id1',id1);
      console.log('id',id);
      

      setQuantities(initialQuantities);
    } catch (e) {
      console.log("getting cart error", e);
    }
  };

  const cartItem = async (itemId:any) => {
    try {
      const sendingId = await axios.post("http://localhost:8020/delete", {
        id: itemId,
      });
      console.log("sendingIdData", sendingId.data);
      gettingCart();
    } catch (e) {
      console.log("sending id error", e);
    }
  };
  const logs=()=>{
console.log('max',maxQuantity);
}
  const handleQuantityChange = (e:any, index:any) => {
    const newQuantities = [...quantities];
    newQuantities[index] = parseInt(e.target.value, 10) || 1;
    setQuantities(newQuantities);
    setCartModified(true);

    // Update quantity in MongoDB immediately
    updateCartItemQuantity(cart[index]._id, newQuantities[index]);
  };

  const updateCartItemQuantity = async (itemId:any, newQuantity:any) => {
    try {
      const updatedCartData = cart.map((item) => ({
        _id: item._id,
        quantity: item._id === itemId ? newQuantity : item.quantity,
      }));

      // Send a request to the server to update the cart
      const updatedCart = await axios.post(
        "http://localhost:8020/updateCart",
        {
          cart: updatedCartData,
        }
      );

      console.log(`updatedCart ${updatedCart.data}`);

      // Refresh the cart data after the update
      gettingCart();
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  useEffect(() => {
    // Calculate total whenever quantities or cart change
    let calculatedTotal = 0;
    cart.forEach((item, index) => {
      const itemSubtotal = item.price * quantities[index];
      calculatedTotal += itemSubtotal;
    });
    setTotal(calculatedTotal);
  }, [cart, quantities]);

  const pushToPage = () => {
    router.push("/");
  };

  const increment = () => {
    setQuantities(quantities + 1);
  };

  const decrement = () => {
    setQuantities(quantities - 1);
  };

  return (
    <Box>
      {cart.length == 0 ? (
        <Box mt="100px" mb="100px" textAlign={"center"}>
          <Heading fontSize={"5xl"}>Your Shopping Cart is Empty</Heading>
          <Button
            mt="20px"
            bg={bg}
            color={color}
            onClick={() => pushToPage()}
          >
            Continue Shopping
          </Button>
        </Box>
      ) : (
        <Box mb="250px">
          <Heading textAlign={"center"}>Cart</Heading>

          <Box
            maxW="100%"
            overflowX="auto"
            maxH="700px"
            overflowY="auto"
          >
            <TableContainer>
              <Table>
                <TableCaption>
                  Here you see <b>Your Cart</b>
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th colSpan={3} textAlign={"center"}>
                      Products                  

                    </Th>
                    <Th>Price</Th>
                    <Th>Quantity</Th>
                    <Th>SubTotal</Th>
                  </Tr>
                </Thead>
                <Divider />

                <Tbody>
                  {cart.map((item, index) => {
                    const itemSubtotal = item.price * quantities[index];

                    return (
                      <React.Fragment key={index}>
                        <Tr>
                          <Td>
                            <IconButton
                              icon={<DeleteIcon />}
                              onClick={() => cartItem(item._id)}
                              aria-label={" delete cart"}
                            />
                            {item._id}
                          </Td>
                          <Td>
                            <Image
                              h="70px"
                              w="70px"
                              src={item.image}
                              alt={item.title}
                            />
                          </Td>
                          <Td>{item.title}</Td>
                          <Td>{item.price}</Td>
                          <Td>
                            <NumberInput
                              defaultValue={quantities[index]}
                              min={1}
                              max={maxQuantity}
                              width="80px"
                              textAlign="center"
                            >
                              <NumberInputField
                                onChange={(e) =>
                                  handleQuantityChange(e, index)
                                }
                              />
                              <NumberInputStepper>
                                <NumberIncrementStepper
                                  onClick={() => increment()}
                                />
                                <NumberDecrementStepper
                                  onClick={() => decrement()}
                                />
                              </NumberInputStepper>
                            </NumberInput>
                          </Td>
                          <Td>{itemSubtotal} </Td>

                        </Tr>
                        <Divider />
                      </React.Fragment>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
            <Box
               w="48%"
               position="absolute"
               bottom="20px"
               right="20px"
               width="48%"
               border="1px solid #ebebeb"
               p="20px"
               backgroundColor="white"
               boxShadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
               borderRadius="4px"
               mb="250px"
             >
               <Text m="20px">
                 <b>Cart Total</b>
               </Text>
               <Divider />
               <Flex m={"20px"} justifyContent={"space-between"}>
                 <Text>Subtotal:</Text>
                 <Text>{total}</Text>
               </Flex>
               <Divider />
               <Flex m={"20px"} justifyContent={"space-between"}>
                 <Text>Total:</Text>
                 <Text>{total} </Text>
               </Flex>
               <Divider />
               <Link
                 href={{
                   pathname: "/checkOut/",
                   query: { cartObj: JSON.stringify(cart), total: total,cartRemainingStock:maxQuantity,cartId:id,cartQuantity:quantities },
                 }}
               >
                 <Button color="white" bg="salmon" onClick={()=>logs()}>
                   Proceed To CheckOut

                 </Button>
               </Link>
             </Box>
           </Box>
         </Box>
       )}
     </Box>
       
  );
};

export default Cart;
