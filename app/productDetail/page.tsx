 "use client";
//  import {
//    Box,
//    Button,
//    Flex,
//    Heading,
//    IconButton,
//    Input,
//    Text,
//    Image,
//    useColorModeValue,
//    NumberDecrementStepper,
//    NumberIncrementStepper,
//    NumberInput,
//    NumberInputField,
//    NumberInputStepper,
   
   
//  } from "@chakra-ui/react";
//  import axios from "axios";
//  import { AddIcon, MinusIcon } from "@chakra-ui/icons";
// // import { useRouter } from "next/router";
// // // import Router from "@/(components)/router";
// // import { useSearchParams } from "next/navigation";
// // import { useEffect, useState } from "react";

// // export default function ProductDetail(searchParams: any) {
// //   const [isDisabled, setIsDisabled] = useState(false);
// //   const [quantity, setQuantity] = useState(1);

// //   const increment = () => {
// //     setQuantity(quantity + 1);
// //   };

// //   const decrement = () => {
// //     if (quantity > 1) {
// //       setQuantity(quantity - 1);
// //     }
// //   };

// //   const ProductId = async () => {
// //     try {
// //       const sendingId = await axios.post("http://localhost:8020/id", {
// //         id: searchParams.searchParams._id,
// //       });

// //       const id = sendingId.data.findedObj;
// //       // setProduct(id);
// //       // console.log("id", id);
// //       console.log("sendingId", id);
// //       // console.log("product", product);

// //       // setQuantity(1);
// //       // router.push("/productDetail", id);
// //       return id;
// //     } catch (e) {
// //       console.log("getting id error", e);
// //       return e;
// //     }
// //   };

// //   // const{
// //   //   router
// //   // }=Router()
// //   const id = ProductId();
// //   // console.log("id", id);
// //   return (
// //     <>
// //       <Flex h="800px" justifyContent={"space-evenly"}>
// //         <Box>
// //           <Heading>{id.image}</Heading>
// //         </Box>
// //         <Box>
// //           <Heading>{id.title}</Heading>
// //           <Text mt="30px">${id.price}</Text>
// //           <Flex align="center">
// //             {isDisabled ? (
// //               <IconButton
// //                 disabled
// //                 opacity={0.5}
// //                 cursor={"not-allowed"}
// //                 icon={<MinusIcon />}
// //                 onClick={() => decrement()}
// //                 aria-label="Decrease Quantity"
// //               />
// //             ) : (
// //               <IconButton
// //                 icon={<MinusIcon />}
// //                 onClick={() => decrement()}
// //                 aria-label="Decrease Quantity"
// //               />
// //             )}
// //             <Input
// //               type="number"
// //               value={quantity}
// //               onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
// //               min={1}
// //               max={9} // Set your maximum quantity limit as needed
// //               width="50px"
// //               textAlign="center"
// //             />
// //             {isDisabled ? (
// //               <IconButton
// //                 disabled
// //                 icon={<AddIcon />}
// //                 onClick={() => increment()}
// //                 aria-label="Increase Quantity"
// //               />
// //             ) : (
// //               <IconButton
// //                 icon={<AddIcon />}
// //                 onClick={() => increment()}
// //                 aria-label="Increase Quantity"
// //               />
// //             )}
// //           </Flex>
// //         </Box>
// //       </Flex>
// //       <Button onClick={() => ProductId()}>Click me</Button>
// //     </>
// //   );
// // }
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// export default function ProductDetail(searchParams: any) {
//   const [isDisabled, setIsDisabled] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [id, setId] = useState(null);
//   const router=useRouter()
 
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const sendingId = await axios.post("http://localhost:8020/id", {
//           id: searchParams.searchParams._id,
//         });

//         const id = sendingId.data.findedObj;
//         console.log("sendingId", id);
//         setId(id);
//       } catch (e) {
//         console.log("getting id error", e);
//       }
//     };

//     fetchData();
//   }, [searchParams.searchParams._id]);
  
 
//   const bg = useColorModeValue("black", "white");
//   const color = useColorModeValue("white", "black");
//     const cartHandler=async ()=>{
// try{
//       const cart=await axios.post('http://localhost:8020/cart',{
//          title :id.title,
//          description : id.description,
//          quantity :quantity,
//          price :id.price,
//          category: id.category ,
//          image : id.image,      })

//       console.log('cart',cart);
      

// router.push('/cart')



// }
// catch(e){
//   console.log(`sending cart object error ${e}`);
  
// }




//     }

//   return (
//     <>
//       {id && (
//         <Flex h="800px" justifyContent={"space-around"} m="50px" gap="30px">
//           <Box  mt="50px" border={'1px solid black'} borderRadius={'10px'} h="500px" p="50px">
//      <Image  src={id.image} alt={id.title} h="400px" w="500px" />
//             {/* <Heading>{id.image}</Heading> */}
//           </Box>
//           <Box  mt="50px" border={'1px solid black'} borderRadius={'10px'} h="500px" p="50px" >
//             <Heading mt="30px">{id.title}</Heading>
//             <Text>{id.description}</Text>
//             <Text mt="30px">${id.price}</Text>
//             <NumberInput defaultValue={1} min={1} max={id.quantity}  width="80px"
//                 textAlign="center">
//   <NumberInputField    onChange={(e) =>
//                   setQuantity(parseInt(e.target.value, 10) || 1)
//                 }/>
//   <NumberInputStepper>
//     <NumberIncrementStepper />
//     <NumberDecrementStepper />
//   </NumberInputStepper>
// </NumberInput>            {quantity+1}

// <Link  href={{
//                   pathname: "/cart/",
//                   query: { quantity:id.quantity },
//                 }}>
//             <Button mt="30px" w="300px" borderRadius={'10px'} color={color} bgColor={bg} onClick={()=>cartHandler()}>Add To Cart</Button>
//            </Link> <br/>
//             <Link  href={{
//                   pathname: "/checkOut/",
//                   query: { obj:id },
//                 }}>
                
//             <Button mt="30px" w="300px" borderRadius={'10px'} bgColor={'salmon'} color="white" >Buy Now</Button>
//             </Link>
//             <br/>
//           </Box>
//         </Flex>
//       )}
//       {/* <Button onClick={() => ProductId()}>Click me</Button> */}
//     </>
//   );
// }
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  Text,
  Image,
  useColorModeValue,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";


export default function ProductDetail(searchParams: any) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [id, setId] = useState(null);
  const [remainingStock, setRemainingStock] = useState(0);
  const router = useRouter();
 const token = localStorage.getItem("token");
 const useEffectHandler=()=>{
if(!token){
setIsDisabled(true)  
}
else{
  setIsDisabled(false)
}}
  useEffect(() => {
    const fetchData = async () => {
      try {
        const sendingId = await axios.post("http://localhost:8020/id", {
          id: searchParams.searchParams._id,
        });

        const id = sendingId.data.findedObj;
        console.log("sendingId", id);
        setId(id);

        // Fetch the remaining stock
        setRemainingStock(id.quantity);
      } catch (e) {
        console.log("getting id error", e);
      }
    };

    fetchData();
    useEffectHandler()
  }, [searchParams.searchParams._id]);

  const bg = useColorModeValue("black", "white");
  const color = useColorModeValue("white", "black");

  const cartHandler = async () => {
    try {
      if (quantity <= remainingStock) {
        const cart = await axios.post("http://localhost:8020/cart", {
          title: id.title,
          description: id.description,
          quantity: quantity,
          maxQuantity:id.quantity,
          price: id.price,
          category: id.category,
          image: id.image,
          productId:id._id
        });

        console.log("cart", cart);

        router.push("/cart");
      } else {
        // Display an alert or handle the case when there is not enough stock
        alert("Not enough stock!");
      }
    } catch (e) {
      console.log(`sending cart object error ${e}`);
    }
  };
const increment=()=>{
  if(id.quantity){
  setQuantity(quantity+1)
  console.log('id',id);}

  else{
    console.log('no more quantities');
    
  }
}
const decrement=()=>{

  setQuantity(quantity-1)
}
  return (
    <>
      {id && (
        <Flex h="800px" justifyContent={"space-around"} m="50px" gap="30px">
          <Box mt="50px" border={"1px solid black"} borderRadius={"10px"} h="500px" p="50px">
            <Image src={id.image} alt={id.title} h="400px" w="500px" />
          </Box>
          <Box mt="50px" border={"1px solid black"} borderRadius={"10px"} h="500px" p="50px">
            <Heading mt="30px">{id.title}</Heading>
            <Text>{id.description}</Text>
            <Text mt="30px">${id.price}</Text>
            <NumberInput
              defaultValue={1}
              min={1}
              max={remainingStock}
              width="80px"
              textAlign="center"
              isDisabled={remainingStock == 0}
            >
              <NumberInputField
                onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
              />
              <NumberInputStepper>
                <NumberIncrementStepper onClick={()=>increment()}/>
                <NumberDecrementStepper onClick={()=>decrement()}/>
              </NumberInputStepper>
            </NumberInput>
            {/* {quantity + 1} */}

           {!isDisabled?
            <Link
            
            href= "/cart/"
            >
              <Button
                mt="30px"
                w="300px"
                borderRadius={"10px"}
                color={color}
                bgColor={bg}
                onClick={() => cartHandler()}
                isDisabled={remainingStock === 0} 
              >
                Add To Cart
              </Button>
            </Link>:
         
              <Button
                mt="30px"
                w="300px"
                borderRadius={"10px"}
                color={color}
                bgColor={bg}
                onClick={() => cartHandler()}
                isDisabled={remainingStock === 0 || isDisabled==true} 
              >
                Add To Cart
              </Button>
           }
            <br />
            <Link
            href={{
              pathname: "/checkOut/",
              query: {
              
                total: id.price * quantity,
                buyObj:JSON.stringify(id),
                buyQuantity:quantity,
                buyRemainingStock:remainingStock,
                buyId:id._id
              },
            }}
          >
            <Button
              mt="30px"
              w="300px"
              borderRadius={"10px"}
              bgColor={"salmon"}
              color="white"
              isDisabled={remainingStock === 0}
            >
              Buy Now
            </Button>
          </Link>
            <br />
          </Box>
        </Flex>
      )}
    </>
  );
}
